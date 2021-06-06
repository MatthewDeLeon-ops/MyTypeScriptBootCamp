var Department = /** @class */ (function () {
    function Department(format) {
        this.employees = [];
        this.names = format;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.names);
    };
    Department.prototype.addEmployee = function (employees) {
        this.employees.push(employees);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
// accounting.employees[2] = "Anna";
accounting.addEmployee("Johnny");
accounting.addEmployee("joanna");
accounting.describe();
accounting.printEmployeeInformation();
