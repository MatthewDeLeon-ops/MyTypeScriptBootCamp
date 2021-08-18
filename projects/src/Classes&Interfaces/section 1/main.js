var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name + " ");
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
var accounting = new Department("Accounting", "BTTS");
accounting.addEmployee("Johnny");
accounting.addEmployee("joanna");
accounting.describe();
accounting.printEmployeeInformation();
