"use strict";
/// The extends can allow you to extend a property, class or method. When an interface type extends a class type it inherits the members of the class but not their implementations. The extends method also supports multiple classes being extended not just one using a comma.
//  Interfaces inherit even the private and protected members of a base class. This means that when you create an interface that extends a class with private or protected members, that interface type can only be implemented by that class or a subclass of it.
class Persona {
    constructor(n) {
        this.name = "";
        this.age = 30;
        this.name = n;
    }
    salute(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user2;
user2 = new Persona("Max");
// user1.name = 'Manu';
user2.salute("Hi there - I am");
console.log(user2);
// interfaces allow you to define the structure of objects. In summary.
// check out info link here: //www.typescriptlang.org/docs/handbook/2/objects.html
