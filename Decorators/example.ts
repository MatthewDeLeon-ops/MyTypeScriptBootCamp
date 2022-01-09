function TestingFn(targetarg: Function){
	console.log('the function invokes here')
	console.log('targetarg',targetarg)
}

@TestingFn

class Doctor {
	doctorID = 'J39108MROD'
	constructor() {
		console.log('Creating an Object')
	}
}
const doctorID = new Doctor();

console.log(doctorID)