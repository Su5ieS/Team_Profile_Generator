const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamMembers = [];

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
      message: "What is the team member id? (must be numerical value)",
      name: "id",
      validate: (idInput) => {
        if (isNaN(idInput)) {
          console.log("  Please reenter team member ID (must be NUMERICAL value)");
          return false;
        } else if (idInput == '') {
          console.log("  Please reenter team member ID (must be NUMERICAL value)");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      message: "What is the team members email?",
      name: "email",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("  Please reenter and provide a vaild email.");
          return false;
        }
      },
    },
  ])
  /* Questions pass in here to generate HTML*/
  .then((answers) => {
    console.log(answers);
    const generateHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-6" style="text-align: center">My Team</h1>
            </div>
          </div>
        </header>
    
        
      </body>
    </html> `;

    fs.writeFile("./dist/index.html", generateHTML, (error) => {
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
