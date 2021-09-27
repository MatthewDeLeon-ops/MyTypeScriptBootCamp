/*
How to restrict types when dealing wit constraints.
Both Parameters should be any kind of object but an object at all times. Currently this is not the case.
To achieve this we need type constraints using extends after the type you want constrianed.

i.e. secondGenType extends string and you will see an error because the type is stating that the object at all times.
*/

function combination<Gen1 extends object, Gen2 extends object>(objA: Gen1, objB: Gen2) {
  return Object.assign(objA, objB);
}

const complexobj = combination({ name: "max", hobbies: ["sportz"] }, { age: 30 });

console.log(complexobj);

/*

Key of Constraint
The issue is accessing properties. I dont know whether the object I have will get the key I want it to have.
Below is an example of how to work with the keyof Constraint. What needs to be done is use a generic Type without the generic gettingthe type is not guaranteed. [Look into reading into this type more. ]
*/

function extractDetails<Gen3 extends object, Gen4 extends keyof Gen3>(obj: Gen3, key: Gen4) {
  return "value" + obj[key];
}

extractDetails({ name: "Johnny" }, "name");
