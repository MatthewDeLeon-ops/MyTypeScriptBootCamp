class Department {
  private employees: string[] = [];

  constructor(private id:string, public name: string){
    
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name} `);
  }
  addEmployee(employees: string) {
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", "BTTS");


accounting.addEmployee("Johnny");
accounting.addEmployee("joanna");
accounting.describe();
accounting.printEmployeeInformation();