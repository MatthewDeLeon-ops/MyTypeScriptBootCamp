class Department {
  names: string;
  private employees: string[] = [];

  constructor(format: string) {
    this.names = format;
  }
  describe(this: Department) {
    console.log("Department: " + this.names);
  }
  addEmployee(employees: string) {
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

// accounting.employees[2] = "Anna";

accounting.addEmployee("Johnny");
accounting.addEmployee("joanna");
accounting.describe();
accounting.printEmployeeInformation();
