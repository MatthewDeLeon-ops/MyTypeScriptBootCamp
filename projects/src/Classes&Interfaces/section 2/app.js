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
        this.employees = [];
    }
    department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name + " ");
    };
    department.prototype.addEmployee = function (employees) {
        this.employees.push(employees);
    };
    department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return department;
}());
// Inherit the department classs (only 1 per extend)
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, '2') || this;
        _this.admins = admins;
        return _this;
    }
    return ItDepartment;
}(department));
var Accounting = new ItDepartment("Accounting", ["BTTS"]);
Accounting.addEmployee("Johnny");
Accounting.addEmployee("joanna");
Accounting.describe();
Accounting.printEmployeeInformation();
