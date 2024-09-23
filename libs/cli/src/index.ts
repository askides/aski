#!/usr/bin/env node

import sade from 'sade';
import { addElement } from './commands/add-element';
import { initialize } from './commands/initialize';

const prog = sade('aski');

prog
  .command('add <name>')
  .describe('Add an element to your app.')
  .example('add Button')
  .action(addElement);

prog
  .command('initialize')
  .alias('init')
  .describe('Initialize config file for askides/elements.')
  .action(initialize);

prog.parse(process.argv);
