// The first class is an Employee parent class with the following properties and
// methods:
// name
// id
// title  should this be role??
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
  constructor(name, id, email, title) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.title = title;
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getTitel() {
    return this.title;
  }
  getRole() {
    // Returns 'Employee'
    return "Employee";
  }
}
module.exports = Employee;
