class Department {
  protected employees: string[] = []; // Like Private but allows the class to be used in extended classes of the original class
  constructor(private id: string, public name: string) {}
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
// Inherit the department classs (only 1 per extend)
class ItDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "2");
    this.admins = admins;
  }
  addEmployee(name: string) {
    if (name === "Matt") {
      return;
    }
    this.employees.push(name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  // Example of Getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("pass in valid value please");
    }
  }
  // End of Getter
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}
const accounting = new AccountingDepartment("accounting", []);
accounting.addEmployee("Johnny");
accounting.mostRecentReport = ""; //setting value triggers setter
accounting.addReport("joanna");
console.log(accounting.mostRecentReport);
