import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';

import Pkg from '../../package.json';

// @ts-ignore
const traverse = _traverse.default;

const getModuleDeps = async (file: string) => {
  const content = await readFile(path.join(process.cwd(), file), 'utf-8');

  const ast = parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  const deps = new Set<string>();

  traverse(ast, {
    // @ts-ignore
    ImportDeclaration({ node }) {
      const importPath = node.source.value;

      if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
        deps.add(importPath);
      }
    },
  });

  return Array.from(deps);
};

(async () => {
  // Get directory from arguments.
  const [, , ...args] = process.argv;

  if (args.length < 1) {
    throw new Error('Please provide a directory to scan.');
  }

  // Define the path to the diretory to scan.
  const dirPath = path.join('src', args[0]);

  // Scan all the dirs in src/elements
  const dirs = await readdir(path.join(process.cwd(), dirPath));

  // Get all the .tsx files in all the dirs
  const files = await Promise.all(
    dirs.map(async (dir) => {
      const files = await readdir(path.join(process.cwd(), dirPath, dir));

      return files
        .filter((el) => el.endsWith('.tsx'))
        .map((file) => path.join(dir, file));
    }),
  ).then((files) => files.flat());

  // Join the dir and file name
  const filesWithDirs = files.map((file) => path.join(dirPath, file));

  // Read the content of each file & extract the dependencies.
  for (const file of filesWithDirs) {
    const depsFromElement = await getModuleDeps(file);
    const depsFromStyles = await getModuleDeps(
      file.replace('.tsx', '.styles.ts'),
    );

    // Combine the dependencies from the element and the styles.
    const deps = [...depsFromElement, ...depsFromStyles];

    // Obtain the currently installed version of the dependencies.
    const depsWithVersion = new Map<string, string>();
    const depsInElements = new Set<string>();
    const depsInPkg = (Pkg.dependencies || {}) as Record<string, string>;

    for (const dep of deps) {
      if (depsInPkg && depsInPkg[dep]) {
        depsWithVersion.set(dep, depsInPkg[dep]);
      }

      // Check if the dependency is in the elements package.
      if (dep.startsWith('~elements/')) {
        depsInElements.add(dep.replace('~elements/', ''));
      }
    }

    // Skip if is not an element.
    if (!file.endsWith('.tsx')) {
      continue;
    }

    const name = file.split('/').pop();
    const dependencies = Object.fromEntries(depsWithVersion);
    const elements = Array.from(depsInElements);

    console.log('Element ->', name);
    console.log('Dependencies ->', dependencies);
    console.log('Elements ->', elements);

    // Write a '.dependencies.json' file with the dependencies.
    const depsPath = file.replace('.tsx', '.dependencies.json');

    await writeFile(
      depsPath,
      JSON.stringify({ dependencies, elements }, null, 2),
    );

    console.log('Dependencies file written to ->', depsPath, '\n');
  }

  console.log('All dependencies files written!');
})();
