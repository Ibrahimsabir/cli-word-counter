#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const answer
= await inquirer.prompt([
    {
    name:"sentence",
    type:"input",
    message:"Enter your sentence for count the words:"
    }
  ] 
)
const Words = answer.sentence.trim().split(" ")

console.log(chalk.bold.blue(Words));
console.log(chalk.bold.red(`Word count of your sentence is : ${Words.length}`));
