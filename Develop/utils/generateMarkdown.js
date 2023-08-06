// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache-2.0':
      return '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL-3.0':
      return '[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function returnLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {  
  if (license) {
    return `## License\n\nThis project is licensed under the [${license} License](${licenseLink}).\n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}

## Description: <a name="description"></a>
${answers.description}

## Table of Contents:
[description](#description)
[installation](#installation)
[usage](#usage)
[license](#license)
[contributing](#contributing)
[tests](#tests)
[questions](#questions)

## Installation: <a name="installation"></a>
${answers.installation}

## Usage: <a name="usage"></a>
${answers.usage} 

## License: <a name="license"></a>
${answers.license}
${renderLicenseBadge(answers.license)}

## Contributing: <a name="contributing"></a>
${answers.contributing}

## Tests: <a name="tests"></a>
${answers.tests}

## Questions: <a name="questions"></a>
Please feel free to reach out to me via my GitHub account: ${answers.githubUsername}, or via email at: ${answers.email}.

`
};

module.exports = generateMarkdown;

