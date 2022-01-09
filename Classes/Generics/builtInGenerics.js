"use strict";
const names = []; // string[]
// names[0].split("");
const promise = new Promise((resolve, _reject) => {
    // set functional code in here to be used in the promise
    //EXAMPLE:
    setTimeout(() => {
        resolve("this is cool");
    }, 2000);
});
// if you do not put promise: the promise will show Promise<unknown>
// placing the :Promise<typehere> enables you to describe the type of data you are sending/recieving. Else, typescript will have no information about the type of data being passed.
// This provides Type Safety
promise.then((data) => {
    data.split("");
});
