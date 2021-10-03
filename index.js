const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message:
        "What type of team member do you want to add? (use arrow keys to select then press enter)",
      name: "whatTeamMemb",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I am done adding team members.",
      ],
    },
    {
      type: "input",
      message: "What is the name of the team member you wish to add?",
      name: "name",
      validate: (nameAnswer) => {
        if (nameAnswer) {
          return true;
        } else {
          console.log("Please enter team members name to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the team member's id?",
      name: "id",
      validate: (idAnswer) => {
        if (idAnswer) {
          return true;
        } else {
          console.log("Please enter team members id to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the team member's email?",
      name: "email",
      validate: (emailAnswer) => {
        if (emailAnswer) {
          return true;
        } else {
          console.log("Please enter team members email to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the team member's id?",
      name: "id",
      validate: (idAnswer) => {
        if (idAnswer) {
          return true;
        } else {
          console.log("Please enter team members id to continue.");
          return false;
        }
      },
    },
  ])
  /* Questions pass in here to generate HTML*/
  .then((answers) => {
    console.log(answers);
    const generateHTML = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-6" style="text-align: center;">My Team</h1>
    </div>
</div>
    
    `;

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
