import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';

import Pkg from '../../package.json';

// @ts-ignore
const traverse = _traverse.default;

(async () => {
  // Scan all the dirs in src/elements
  const dirs = await readdir(path.join(process.cwd(), 'src', 'elements'));

  // Get all the .tsx files in all the dirs
  const files = await Promise.all(
    dirs.map(async (dir) => {
      const files = await readdir(
        path.join(process.cwd(), 'src', 'elements', dir),
      );

      return files
        .filter((el) => el.endsWith('.tsx'))
        .map((file) => path.join(dir, file));
    }),
  ).then((files) => files.flat());

  // Join the dir and file name
  const filesWithDirs = files.map((file) => path.join('src', 'elements', file));

  // Read the content of each file & extract the dependencies.
  for (const file of filesWithDirs) {
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

    // Obtain the currently installed version of the dependencies.
    const depsWithVersion = new Map<string, string>();
    const depsInPkg = (Pkg.dependencies || {}) as Record<string, string>;

    for (const dep of deps) {
      if (depsInPkg && depsInPkg[dep]) {
        depsWithVersion.set(dep, depsInPkg[dep]);
      }
    }

    const name = file.split('/').pop();
    const dependencies = Object.fromEntries(depsWithVersion);

    console.log('Element ->', name);
    console.log('Dependencies ->', dependencies);

    // Write a '.dependencies.json' file with the dependencies.
    const depsPath = file.replace('.tsx', '.dependencies.json');

    await writeFile(depsPath, JSON.stringify(dependencies, null, 2));

    console.log('Dependencies file written to ->', depsPath, '\n');
  }

  console.log('All dependencies files written!');
})();
