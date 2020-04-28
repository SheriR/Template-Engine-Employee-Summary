// In addition to Employee's properties and methods, Engineer will also have:
// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  // Overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
