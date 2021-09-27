/*
This is an example I made of a flexible yet strongly typed class
A good typescript class to follow along which I'd recommend is understanding Typescript 2021 Udemy -- 10 to 100$
objects are referenced types -- core of javascript. If you don't fully understand or ocassionally get confused. Google or Revisit projects and/or javascript courses
*/

// ensures that the class only supports the primitive types defined here
class modifiers<Gen6 extends string | number | symbol> {
  private data: Gen6[] = [];
  addItem(item: Gen6) {
    this.data.push(item); // appending some data
  }
  removeItem(item: Gen6) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    /*
    Removes the last element in the array which returns -1.
    Index of will not work with objects passed through hint line 17. 
	Javascript is looking for an address and the input from line 17 is counted as a new object technically speaking.
	*/
  }
  getItems() {
    return [...this.data]; //Returning the array of data
  }
}

const input = new modifiers<string>();
input.addItem("maxolie");
input.addItem("ollie");
input.removeItem("ollie");
console.log(input.getItems());

//The solution to solve the objects issue mentioned lines 18-20 is to pass the defined variable using the type supported via the class accepting primitive types only. see below
const coolinfo = "I just want to git in it -- integration test pun";
input.addItem(coolinfo);
