class department {
	private employees: string[] = [];

	constructor(private id: string, public name: string) {

	}
	describe(this: department) {
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
class ItDepartment extends department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id,'2');
		this.admins = admins;
	}
}


const Accounting = new ItDepartment("Accounting", ["BTTS"]);


Accounting.addEmployee("Johnny");
Accounting.addEmployee("joanna");
Accounting.describe();
Accounting.printEmployeeInformation();