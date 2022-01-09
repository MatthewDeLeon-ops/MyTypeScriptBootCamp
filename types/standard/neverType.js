"use strict";
let userInputs;
let userNames;
userInputs = 5;
userInputs = "Maxine";
if (typeof userInputs === "string") {
    userNames = userInputs;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
    };
    //   while (true) {}
}
const result = generateError("An error occurred", 504);
console.log(result);
