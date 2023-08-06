// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "developerName",
        message: "What is the developer's name?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the project name?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the project license?",
        choices: ["MIT", "Apache-2.0", "GPL-3.0"]
    },
    {
        type: "input",
        name: "description",
        message: "Please provide the project description."
    },
    {
        type: "input",
        name: "usage",
        message: "How will the project be used?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName, data)
}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    let data = generateMarkdown(answers)
    writeToFile("DS_Store/README.md", data)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
