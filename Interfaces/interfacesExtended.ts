// 1st route of adding functionality to Interface

/* 
type Functionality = (first: number, second: number) => number;
let add: Functionality;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
*/

// /*
// Interface based functionality.

interface Functionality {
  (n1: number, n2: number): number;
}

let Add: Functionality;

Add = (n1: number, n2: number) => {
  return n1 + n2;
};

// */
interface Name {
  readonly name: string;
}

interface Salutation extends Name {
  salute(phrase: string): void;
}

class Persona1 implements Salutation {
  name = "";
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  salute(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let user3: Persona1;

user3 = new Persona1("Max");

user3.salute("Hi there - I am");
console.log(user3);

// check out info link here: //www.typescriptlang.org/docs/handbook/2/objects.html
