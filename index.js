const fs = require('fs');
const {prompt} = require('inquirer');


const generateREADME = ({title, description, installation, usage, contribution, test, license, github, email }) =>
` # ${title}

## Description:

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
---
${installation}

## Usage:
---
${usage}

## License
---

![License](https://img.shields.io/badge/License-${license}-brightgreen.svg?style=plastic&logo=appveyor)

## Contributing:
---
${contribution}

## Tests:
---
${test}

## Questions
---
[GitHub](https://github.com/${github})
 
You can reach me at ${email}`



prompt([
    {
      type: 'input',
      message: 'Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['NPM', 'GitHub', 'GitLab', 'APM']
    },
    {
        type: 'input',
        message: 'Contributing:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests',
    },   
    {
        type: 'input',
        message: 'Enter your GitHub Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your Email',
        name: 'email',
    },
  ])
  .then((answer) => {
    const ReadMEContent = generateREADME(answer);
        fs.writeFile('README.md', ReadMEContent, (err) =>
        err ? console.log(err) : console.log('Successfully created Readme.md!')
        );
  })