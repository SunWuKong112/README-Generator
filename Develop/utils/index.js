const fs = require("fs");
const generateMarkdown = require("../generateMarkdown");
const inquirer = require("inquirer");
const userInput = new Array;

// array of questions for user
const questions = [ { type: "input",
                      name: "title",
                      message:"Enter README title:", },
                    { type: "input",
                      name: "username",
                      message:"Enter GitHub username:"},
                      { type: "input",
                      name: "GitHubLink",
                      message:"Enter GitHub link:"},
                    { typs: "input",
                      name: "description",
                      message: "Enter README description; use a tilde to make a new line (in the top-left corner of the keyboard, looks like this ~; hold shift and press it):"},
                    { type: "input",
                      name: "installations",
                      message: "Enter required installations; commas in between each entry:"},
                    { type: "input",
                      name: "usage",
                      message: "Enter usage:"},
                    { type: "input",
                      name: "licenses",
                      message: "Enter licenses; commas in between each entry:"},
                    { type: "input",
                      name: "contributing",
                      message: "Enter contributing:"},
                    { type:"input",
                      name: "tests",
                      message: "Enter tests:"},
                    { type: "input",
                      name: "questions",
                      message: "Enter Questions:"},
                    { type: "input",
                      name: "fileName",
                      message: "Enter file name (it is highly suggested that this be named README):"}];

// function to write README file


// function to initialize program
function init()
{
  inquire();
}

function inquire(){
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile(`${answers.fileName}.md`, generateMarkdown(answers), (err) => { 
      if (err) 
        console.log(err); 
      else { 
        console.log("File written successfully\n"); 
        console.log("The written has the following contents:"); 
        console.log(fs.readFileSync(`${answers.fileName}.md`, "utf8")); 
      } 
  });
});
}
// function call to initialize program
init();