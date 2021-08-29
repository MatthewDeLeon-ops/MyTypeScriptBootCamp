var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + '' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Maximillian pegasus');
user1.greet('Hi there lets duel');
console.log(user1);
// interfaces allow you to define the structure of objects. In summary.
