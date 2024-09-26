#!/usr/bin/env node

import sade from 'sade';
import { add } from './commands/add';
import { init } from './commands/init';

const prog = sade('aski');

prog
  .command('add <folder> <name>')
  .option('--verbose', 'Enable verbose mode.')
  .describe('Add an element or an example to your app.')
  .example('add elements Button')
  .example('add examples Invoices')
  .action(add);

prog
  .command('init')
  .describe('Initialize the .askides.json config file.')
  .action(init);

prog.parse(process.argv);
