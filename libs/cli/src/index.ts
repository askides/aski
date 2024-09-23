#!/usr/bin/env node

import sade from 'sade';
import { addElement } from './commands/add-element';
import { initialize } from './commands/initialize';

const prog = sade('aski');

prog
  .command('add:element <name>')
  .describe('Add an element to your app.')
  .example('add element Button')
  .action(addElement);

prog
  .command('initialize')
  .alias('init')
  .describe('Initialize an .askides.json config file.')
  .action(initialize);

prog.parse(process.argv);
