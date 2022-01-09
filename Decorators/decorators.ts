/* 
// Decorator intro\\ 

function TestingFn(targetarg: Function) {
	console.log('the function invokes here')
	console.log('targetarg', targetarg)
}

@TestingFn

class Doctor {
	doctorID = 'J39108MROD'
	constructor() {
		console.log('Creating an  Object')
	}
}
const doctorID = new Doctor();

console.log(doctorID)
// */ 

// Decorator Factory implementation example\\
function firstDecorate(logString: string) {
	return function (constructor: Function) {
		console.log('testing decorators', constructor)
		console.log('logString', logString)
	}
}
// calling decorator here (not executing the decorator function but executing a fn that returns the decorator function)
@firstDecorate('hello there ')

class Decorations {
	food = 'chocolate'
	constructor() {
		console.log('hello Fresh')
	}
}