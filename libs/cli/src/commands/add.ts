import { Octokit } from '@octokit/rest';
import { execSync } from 'node:child_process';
import { createWriteStream, existsSync } from 'node:fs';
import { mkdir, readFile, unlink } from 'node:fs/promises';
import { get } from 'node:https';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { resolveCommand } from 'package-manager-detector';
import {
  getConfig,
  getDependencyName,
  getFilePath,
  getPackageManager,
} from '../utils/getPackageJsonPath';

const streamPipeline = promisify(pipeline);

class Console {
  constructor(private isVerbose = false) {}

  log(...args: Parameters<typeof console.log>) {
    console.log(...args);
  }

  debug(...args: Parameters<typeof console.log>) {
    if (this.isVerbose) {
      console.log(...args);
    }
  }
}

async function downloadFile(
  filePath: string,
  downloadUrl: string,
  outputPath: string
) {
  const fullPath = join(outputPath, filePath);

  // Create the directory recursively if it doesn't exist
  await mkdir(dirname(fullPath), { recursive: true });

  return new Promise<void>((resolve, reject) => {
    get(downloadUrl, async (response) => {
      // Reject if status code isn't 200
      if (response.statusCode !== 200) {
        return reject(
          new Error(`Failed to download ${filePath}: ${response.statusCode}`)
        );
      }

      try {
        // Use pipeline for stream management
        await streamPipeline(response, createWriteStream(fullPath));
        resolve();
      } catch (error) {
        reject(error);
      }
    }).on('error', reject); // Handle request errors
  });
}

// TODO: Optimize this.
const getOutDir = (
  name: string,
  config: Awaited<ReturnType<typeof getConfig>>
) => {
  switch (name) {
    case 'elements':
      return config!.dirs.elements;
    case 'chunks':
      return config!.dirs.chunks;
    default:
      throw new Error('Invalid directory name!');
  }
};

export async function add(
  folder: string,
  name: string,
  opts?: {
    verbose?: boolean;
    isSubCommand?: boolean;
  }
) {
  const client = new Octokit();
  const console = new Console(opts?.verbose);

  if (!opts?.isSubCommand) {
    console.log(`✨ Adding ${name} and its deps...`);
  }

  const pm = await getPackageManager();

  const config = await getConfig();

  if (!config) {
    console.log(
      'Config file not found. Run `npx @askides/cli init` to create one.'
    );

    return false;
  }

  const outDir = getOutDir(folder, config);

  const { data } = await client.repos.getContent({
    owner: 'askides',
    repo: 'aski',
    path: `libs/elements/src/${folder}/${name}`,
  });

  if (!Array.isArray(data)) {
    throw new Error('Element is not a directory!');
  }

  for (const file of data) {
    if (file.type === 'file' && file.download_url) {
      await downloadFile(
        join(name, file.name),
        file.download_url,
        join(process.cwd(), outDir)
      );
    }
  }

  // Read the dependencies file and install them.
  const { dependencies, elements } = JSON.parse(
    await readFile(
      join(process.cwd(), outDir, name, `.dependencies.json`),
      'utf-8'
    )
  );

  // Install dependencies
  console.debug('Dependencies found:', { dependencies, elements });
  console.debug(`Installing dependencies for ${name}...`);

  const depsToInstall = Object.entries(dependencies).map(
    ([packageName, version]) => `${packageName}@${version}`
  );

  // Exclude the already installed dependencies:
  const depsInPkg = JSON.parse(
    await readFile(getFilePath('package.json'), 'utf-8')
  );

  for (const dep of depsToInstall) {
    // Extract the dependency name
    const depName = getDependencyName(dep);

    if (depsInPkg.dependencies && depsInPkg.dependencies[depName]) {
      // Log the dependency as already installed.
      console.debug(`Dependency ${depName} already installed!`);

      // Remove the dependency from the list
      depsToInstall.splice(depsToInstall.indexOf(dep), 1);
    }
  }

  if (depsToInstall.length > 0) {
    // Resolve the command to install dependencies
    const solved = resolveCommand(pm.agent, 'add', depsToInstall);

    if (!solved) {
      throw new Error('Failed to resolve the command to install dependencies.');
    }

    // Execute the command to install dependencies
    execSync(`${solved.command} ${solved.args.join(' ')}`, {
      stdio: opts?.verbose ? 'inherit' : 'ignore',
    });
  }

  // Delete the dependencies file
  await unlink(join(process.cwd(), outDir, name, `.dependencies.json`));

  // Install elements
  for (const element of elements) {
    // Skip if the element already exists.
    if (!existsSync(join(config.dirs.elements, element))) {
      await add('elements', element, { isSubCommand: true });
    }
  }

  // Handle the completion of the process
  if (!opts?.isSubCommand) {
    console.log(`✨ Element ${name} added!`);
  }
}
