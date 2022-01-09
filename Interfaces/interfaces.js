"use strict";
class persona {
    constructor(n) {
        this.name = "";
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
let user1;
user1 = new persona("Maximillian pegusis");
user1.greet("Hi there lets duel");
console.log(user1);
// interfaces allow you to define the structure of objects. In summary.
// Interfaces are a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface
