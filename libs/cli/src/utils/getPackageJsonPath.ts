import { existsSync, readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, parse } from 'node:path';
import { detect } from 'package-manager-detector/detect';

export const getFilePath = (name: string, startDir = process.cwd()) => {
  let currentDir = startDir;

  while (currentDir !== parse(currentDir).root) {
    const packageJsonPath = join(currentDir, name);

    if (existsSync(packageJsonPath)) {
      return packageJsonPath;
    }

    // Move up one directory level
    currentDir = dirname(currentDir);
  }

  throw new Error(`No ${name} found!`);
};

export const getRootDir = () => {
  return dirname(getFilePath('package.json'));
};

export const getDependencyName = (dep: string) => {
  const match = dep.match(/^(@?[^@]+)(?:@.+)?$/);
  return match ? match[1] : dep;
};

export const getConfig = async () => {
  const configPath = join(getRootDir(), '.askides.json');

  if (existsSync(configPath)) {
    return JSON.parse(await readFile(configPath, 'utf-8')) as ReturnType<
      typeof getDefaultConfig
    >;
  }

  return null;
};

export const getConfigPath = () => {
  return join(getRootDir(), '.askides.json');
};

export const getDefaultConfig = () => {
  const pkg = readFileSync(getFilePath('package.json'), 'utf-8');

  return {
    version: JSON.parse(pkg).version,
    dirs: {
      elements: 'src/elements',
      examples: 'src/examples',
      chunks: 'src/chunks',
    },
  };
};

export const getPackageManager = async () => {
  const manager = await detect();

  if (!manager) {
    throw new Error('No package manager found!');
  }

  return manager;
};
