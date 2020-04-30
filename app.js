const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

let teamHTML = "";
//let employees = [];

function start() {
  console.log("Lets build your team.");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager's Id?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's Office Number?",
        name: "managerOfficeNo",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNo
      );
      console.log(`${data.managerName} has been added!`);
      teamMember = fs.readFileSync("templates/manager.html");
      teamHTML = teamHTML + "\n" + eval("`" + teamMember + "`");
      //team.push(manager);
      addAnother();
    });
}

function addEngineer() {
  console.log("Lets add your Engineer");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineer's Id?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub user name?",
        name: "engineerGitHub",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGitHub
      );
      console.log(`${data.engineerName} has been added!`);
      teamMember = fs.readFileSync("templates/engineer.html");
      teamHTML = teamHTML + "\n" + eval("`" + teamMember + "`");
      addAnother();
    });
}

function addIntern() {
  console.log("Lets add your Intern");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the intern's Id?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "internSchool",
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      );
      console.log(`${data.internName} has been added!`);
      teamMember = fs.readFileSync("templates/intern.html");
      teamHTML = teamHTML + "\n" + eval("`" + teamMember + "`");
      // team.push(intern);
      addAnother();
    });
}

function addAnother() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Chose the role of your next team member",
        name: "choice",
        choices: ["Add Engineer", "Add Intern", "Done Adding"],
      },
    ])
    .then(function (data) {
      if (data.choice === "Add Engineer") {
        addEngineer();
      } else if (data.choice === "Add Intern") {
        addIntern();
      } else {
        const mainHTML = fs.readFileSync("templates/main.html");
        teamHTML = eval("`" + mainHTML + "`");

        fs.writeFile("output/team.html", teamHTML, function (err) {
          if (err) {
            return console.log(err);
          }
          {
            console.log("Check the output folder for the team.html.");
          }
        });
      }
    });
}

start();
