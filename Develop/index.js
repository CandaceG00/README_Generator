// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide the project description."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps to install the project."
    },
    {
        type: "input",
        name: "usage",
        message: "How will the project be used?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the project license?",
        choices: ["MIT", "Apache-2.0", "GPL-3.0"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any contributors."
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any applicable tests."
    },
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
