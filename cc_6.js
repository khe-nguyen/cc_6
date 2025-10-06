// Coding Challenge 6 — Employee Management System

// Step 2: Base class Employee
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Step 3: Subclass Manager
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // Inherit name and department
    this.teamSize = teamSize;
  }

  describe() {
    // Override parent method
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`;
  }
}

// Step 4: Sample employees and managers
const emp1 = new Employee("Diamond Clearwater", "Data Analyst");
const emp2 = new Employee("Reese Crunch", "Finance");
const mgr1 = new Manager("Mushroom Middle", "Software Engineering", 8);
const mgr2 = new Manager("Alfajor Choco", "Sales", 3);

// Step 5: Company class
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Company Employee List:");
    for (let e of this.employees) {
      console.log(e.describe());
    }
  }
}
