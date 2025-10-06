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

