const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");

let managers = [];
let engineers = [];
let interns = [];

async function addManager() {
  console.log("Lets add your manager(s)");

  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
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
    .then(function (answer) {
      const newManager = new Manager(
        answer.managerName,
        answer.employeeId,
        answer.managerEmail,
        answer.managerofficeNo
      );
      console.log(`${answer.managerName} has been added!`);
      managers.push(newManager);
      addAnother();
    });
}

async function addEngineer() {
  console.log("Lets add your Engineer");

  await inquirer
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
    .then(function (answer) {
      const newEngineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGitHub
      );
      console.log(`${answer.engineerName} has been added!`);
      engineers.push(newEngineer);
      addAnother();
    });
}

async function addIntern() {
  console.log("Lets add your Intern");

  await inquirer
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
    .then(function (answer) {
      const newIntern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      console.log(`${answer.internName} has been added!`);
      interns.push(newIntern);
      addAnother();
    });
}

async function addAnother() {
  await inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another employee?",
        name: "choice",
        choices: ["Add Engineer", "Add Intern", "Done Adding"],
      },
    ])
    .then(function (answer) {
      if (answer.choice === "Add Engineer") {
        addManager();
      } else if (answer.choice === "Add Intern") {
        addEngineer();
      } else {
        createHtml();
      }
    });
}

function createHtml() {}
addManager();
