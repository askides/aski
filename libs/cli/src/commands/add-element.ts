import { Octokit } from '@octokit/rest';
import { exec } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import { get } from 'node:https';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { getConfig } from '../utils/getPackageJsonPath';

const streamPipeline = promisify(pipeline);

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

export async function addElement(name: string) {
  const client = new Octokit();

  console.log(`Adding element ${name}...`);

  const config = await getConfig();

  if (!config) {
    console.warn(
      'Config file not found. Run `npx askides init` to create one.'
    );

    return false;
  }

  const { data } = await client.repos.getContent({
    owner: 'askides',
    repo: 'aski',
    path: `libs/elements/src/elements/${name}`,
  });

  if (!Array.isArray(data)) {
    throw new Error('Element is not a directory!');
  }

  for (const file of data) {
    if (file.type === 'file' && file.download_url) {
      await downloadFile(
        join(name, file.name),
        file.download_url,
        join(process.cwd(), config.dir)
      );
    }
  }

  // Read the dependencies file and install them.
  const dependencies = JSON.parse(
    await readFile(
      join(process.cwd(), config.dir, name, `${name}.dependencies.json`),
      'utf-8'
    )
  );

  // Install dependencies
  console.info(`Installing dependencies for ${name}...`);

  const depsToInstall = Object.entries(dependencies)
    .map(([packageName, version]) => `${packageName}@${version}`)
    .join(' ');

  const install = exec(`pnpm install ${depsToInstall}`);

  // Handle the completion of the process
  install.on('close', (code) => {
    if (code !== 0) {
      console.error(`Failed to install dependencies for ${name}`);
    }

    console.log(`Element ${name} added!`);
  });

  // Handle errors during execution
  install.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });
}
