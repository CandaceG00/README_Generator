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
renderLicenseBadge();

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
returnLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {
  const licenseLink = returnLicenseLink(license);
  
  if (licenseLink) {
    return `## License\n\nThis project is licensed under the [${license} License](${licenseLink}).\n`;
  } else {
    return '';
  }
}
generateLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}
  
## Developer Name:
${answers.developerName}

## License:
${answers.license}

## Usage:
${answers.usage}`
};

module.exports = generateMarkdown;

