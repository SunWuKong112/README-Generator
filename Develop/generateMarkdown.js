// function to generate markdown for README
function generateMarkdown(data) {
  let installations = data.installations;
  let instArray = installations.split(" ");
  installations = "";
  for (let i in instArray)
  {
    installations += `
    * ${instArray[i]}`;
  }
  let license = data.licenses;
  let licenseArray = license.split(" ");
  licenses = "";
  for (let i in instArray)
  {
    licenses += `
    * ${licenseArray[i]}`;
  }
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

## #Installation:${installations}

## #Usage:
${data.usage}

## #License:${licenses}

## #Contributing:
${data.contributing}

## #Tests:
${data.tests}

## #Questions:
${data.questions}

`;
}

module.exports = generateMarkdown;
