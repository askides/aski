import { consola } from 'consola';
import { writeFile } from 'node:fs/promises';
import {
  getConfig,
  getConfigPath,
  getDefaultConfig,
} from '../utils/getPackageJsonPath';

export async function initialize() {
  consola.start(`Initializing config file for Elements...`);

  const config = await getConfig();

  if (config) {
    throw new Error('Config file .askides.json already exists!');
  }

  // Create the config file
  await writeFile(getConfigPath(), JSON.stringify(getDefaultConfig(), null, 2));

  consola.success('Config file created at ->', getConfigPath());
}
