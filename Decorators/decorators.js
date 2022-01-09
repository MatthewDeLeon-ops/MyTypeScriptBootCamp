/*
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Factory implementation example\\
function firstDecorate(logString) {
    return function (constructor) {
        console.log('testing decorators', constructor);
        console.log('logString', logString);
    };
}
// calling decorator here (not executing the decorator function but executing a fn that returns the decorator function)
var Decorations = /** @class */ (function () {
    function Decorations() {
        this.food = 'chocolate';
        console.log('hello Fresh');
    }
    Decorations = __decorate([
        firstDecorate('hello there ')
    ], Decorations);
    return Decorations;
}());
