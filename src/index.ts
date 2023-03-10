#!/usr/bin/env node

import inquirer from 'inquirer';

const answer: { sentence: string } = await inquirer.prompt({
  type: 'input',
  message: 'Enter a sentence: ',
  name: 'sentence',
});

const { sentence } = answer;
const count = sentence.trim().split(' ').length;
console.log(`THE WORD COUNT FOR YOUR SENTENCE IS: ${count}`);
