import { writeFile } from 'node:fs/promises';
import {
  getConfig,
  getConfigPath,
  getDefaultConfig,
} from '../utils/getPackageJsonPath';

export async function init() {
  console.log(`Initializing config file for Elements...`);

  const config = await getConfig();

  if (config) {
    throw new Error('Config file .askides.json already exists!');
  }

  // Create the config file
  await writeFile(getConfigPath(), JSON.stringify(getDefaultConfig(), null, 2));

  console.log('Config file created at ->', getConfigPath());
}
