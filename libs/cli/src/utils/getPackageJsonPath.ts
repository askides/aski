import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, parse } from 'node:path';

export const getPackageJsonPath = (startDir = process.cwd()) => {
  let currentDir = startDir;

  while (currentDir !== parse(currentDir).root) {
    const packageJsonPath = join(currentDir, 'package.json');

    if (existsSync(packageJsonPath)) {
      return packageJsonPath;
    }

    // Move up one directory level
    currentDir = dirname(currentDir);
  }

  throw new Error('No package.json found!');
};

export const getRootDir = () => {
  return dirname(getPackageJsonPath());
};

export const getConfig = async () => {
  const configPath = join(getRootDir(), '.askides.json');

  if (existsSync(configPath)) {
    return JSON.parse(await readFile(configPath, 'utf-8')) as Record<
      string,
      string
    >;
  }

  return null;
};

export const getConfigPath = () => {
  return join(getRootDir(), '.askides.json');
};

export const getDefaultConfig = () => {
  return {
    dir: 'src/elements',
  };
};
