abstract class department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITdepartment extends department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT department - ID: " + this.id);
  }
}

class Accountingdepartment extends department {
  private lastReport: string;
  private static instance: Accountingdepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (Accountingdepartment.instance) {
      return this.instance;
    }
    this.instance = new Accountingdepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = department.createEmployee("Max");
console.log(employee1, department.fiscalYear);

const it = new ITdepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const Accounting = Accountingdepartment.getInstance();
console.log(Accounting);

Accounting.mostRecentReport = "Year End Report";
Accounting.addReport("Something went wrong...");
console.log(Accounting.mostRecentReport);

Accounting.addEmployee("Max");
Accounting.addEmployee("Manu");

// Accounting.printReports();
// Accounting.printEmployeeInformation();
Accounting.describe();

// const AccountingCopy = { name: 'DUMMY', describe: Accounting.describe };

// AccountingCopy.describe();
