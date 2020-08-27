// function to generate markdown for README
function generateMarkdown(data) {
  let description = generateSection(data.description, "~", "paragraph");
  let installations = generateSection(data.installations, ",", "bullet");
  let usage = generateSection(data.usage, "~", "paragraph");
  let licenses = generateSection(data.licenses, ",", "bullet");
  let contributing = generateSection(data.contributing, ",", "paragraph");
  let tests = generateSection(data.tests, ",", "paragraph");
  let questions = generateSection(data.questions, ",", "paragraph");
return `# ${data.title}

## GitHub Username:
${data.username}
[GitHub](${data.GitHubLink})

##  Description:
${description}

## Table of Contents:
  * [Installation](##installation)
  * [Installation](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## #Installation:${installations}

## #Usage:${usage}

## #Licenses:${licenses}

## #Contributing:
${contributing}

## #Tests:
${tests}

## #Questions:
${questions}

`;
}

function generateSection(str, seperator, type)
{
  let strArray = str.split(seperator);
  switch (type){
    case "paragraph":
      str = "";
      for (let i in strArray)
      {
        str += `
        ${strArray[i]}`;
      }
      return str;
    case "bullet":
        str = "";
        for (let i in strArray)
        {
        str += `
        * ${strArray[i]}`;
        }
        return str;
    default: return str
  }
}

module.exports = generateMarkdown;
