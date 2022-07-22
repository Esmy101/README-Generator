const { fstat } = require('fs');
const {prompt} = require('inquirer');


const generateREADME = ({title, description, installation, usage, contribution, test, licence, github, email }) =>
` #${title}

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
${licence}

## Contributing:
---
${contribution}

## Tests:
---
${test}

## Questions
---
[GitHub](${github})
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
        choices: ['']
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
        fs. writeFile('README.md', ReadMEContent, (err) =>
        err ? console.log(err) : console.log('Successfully created Readme.md!')
        );
  })