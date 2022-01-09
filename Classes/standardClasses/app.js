"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // Like Private but allows the class to be used in extended classes of the original class
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name} `);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// Inherit the department classs (only 1 per extend)
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, "2");
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === "max") {
            return;
        }
        this.employees.push(name);
    }
}
class AccountingDepartment extends Department {
    // End of Getter
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // Example of Getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("pass in valid value please");
        }
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting = new AccountingDepartment("accounting", []);
accounting.addEmployee("Johnny");
accounting.mostRecentReport = ""; //setting value triggers setter
accounting.addReport("joanna");
console.log(accounting.mostRecentReport);
