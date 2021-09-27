function merge<myGenericType, secondGenType>(objA: myGenericType, objB: secondGenType) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "max" }, { age: 30 });
// console.log(merge({ name: "max" }, { age: 30 })); // creates one object via the 2 objects defined
// I dont know about the exact type of object the output is but typescript understands that there are specific types of data
// defines the very specific types Dynamically  that I am working with.

//ALTERNATIVELY I can define the type "statically" that my types defined in line 1 are.
const definedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "max", hobbies: ["sports"] },
  { age: 30 },
);
//However this is redundant because typescript already infers the types for my generics i defined.

interface lengthinfo {
  length: number;
}

// An Example of using interfaces with Generic Types
// the interface is now extended onto the generic type. So length properties can be attached.
function DetailedCount<myGenericType extends lengthinfo>(
  element: myGenericType,
): [myGenericType, string] {
  let detailedTextMessage = "No Value Provided please send a value";
  if (element.length === 1) {
    detailedTextMessage = "1 element was provided";
  } else if (element.length > 1) {
    detailedTextMessage = "Got" + element.length + "elements";
  }
  return [element, detailedTextMessage];
}

console.log(DetailedCount("here is some input"));

//Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data). https://www.typescriptlang.org/docs/handbook/generics.html
