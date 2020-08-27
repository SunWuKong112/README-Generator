// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## GitHub Username:
${data.username}
[GitHub](${data.GitHubLink})

##  Description:
${data.description}

## Table of Contents:
* [Installation](##installation)
* [Installation](#usage)
* [License](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## #Installation:
${data.installations}

## #Usage:
${data.usage}

## #License:
${data.licenses}

## #Contributing:
${data.contributing}

## #Tests:
${data.tests}

## #Questions:
${data.questions}

`;
}

module.exports = generateMarkdown;
