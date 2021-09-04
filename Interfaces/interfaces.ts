interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class persona implements Greetable {
  name = "";
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;
user1 = new persona("Maximillian pegusis");
user1.greet("Hi there lets duel");
console.log(user1);
// interfaces allow you to define the structure of objects. In summary.
// Interfaces are a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface
