"use strict";
// 1st route of adding functionality to Interface
let Add;
Add = (n1, n2) => {
    return n1 + n2;
};
class Persona1 {
    constructor(n) {
        this.name = "";
        this.age = 30;
        this.name = n;
    }
    salute(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user3;
user3 = new Persona1("Max");
user3.salute("Hi there - I am");
console.log(user3);
// check out info link here: //www.typescriptlang.org/docs/handbook/2/objects.html
