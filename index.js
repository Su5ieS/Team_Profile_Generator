const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the right question?",
      name: "test",
      validate: (testAnswer) => {
        if (testAnswer) {
          return true;
        } else {
          console.log("Please enter SOMETHING to continue.");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "What type of team member do you want to add? (use arrow keys to select then press enter)",
      name: "whatTeamMemb",
      choices: ["Manager", "Engineer", "Intern", "I do not want to add any more team members."], 
    },
  ])
  /* Questions pass in here to generate HTML*/
  .then((answers) => {
    console.log(answers);
    const generateHTML = `<h1> ${answers.test}</h1> <p> ${answers.whatTeamMemb}`

    fs.writeFile("index.html", generateHTML, (error) => {
      console.log(error);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

