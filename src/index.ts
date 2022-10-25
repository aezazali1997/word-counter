import {Answers} from 'inquirer';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: "input",
      name: "value",
      message: "Enter the paragraph",
    },
  ])
  .then((answer: Answers) => {
    const wordsArray = answer.value.split(" "); 
  console.log('Words length is :',wordsArray.length);
  
  })