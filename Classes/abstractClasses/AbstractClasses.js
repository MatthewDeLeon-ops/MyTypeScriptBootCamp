var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var department = /** @class */ (function () {
    function department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(department.fiscalYear);
    }
    department.createEmployee = function (name) {
        return { name: name };
    };
    department.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    department.fiscalYear = 2020;
    return department;
}());
var ITdepartment = /** @class */ (function (_super) {
    __extends(ITdepartment, _super);
    function ITdepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITdepartment.prototype.describe = function () {
        console.log('IT department - ID: ' + this.id);
    };
    return ITdepartment;
}(department));
var Accountingdepartment = /** @class */ (function (_super) {
    __extends(Accountingdepartment, _super);
    function Accountingdepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(Accountingdepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    Accountingdepartment.getInstance = function () {
        if (Accountingdepartment.instance) {
            return this.instance;
        }
        this.instance = new Accountingdepartment('d2', []);
        return this.instance;
    };
    Accountingdepartment.prototype.describe = function () {
        console.log('Accounting department - ID: ' + this.id);
    };
    Accountingdepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    Accountingdepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Accountingdepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return Accountingdepartment;
}(department));
var employee1 = department.createEmployee('Max');
console.log(employee1, department.fiscalYear);
var it = new ITdepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
// it.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
var Accounting = Accountingdepartment.getInstance();
console.log(Accounting);
Accounting.mostRecentReport = 'Year End Report';
Accounting.addReport('Something went wrong...');
console.log(Accounting.mostRecentReport);
Accounting.addEmployee('Max');
Accounting.addEmployee('Manu');
// Accounting.printReports();
// Accounting.printEmployeeInformation();
Accounting.describe();
// const AccountingCopy = { name: 'DUMMY', describe: Accounting.describe };
// AccountingCopy.describe();
