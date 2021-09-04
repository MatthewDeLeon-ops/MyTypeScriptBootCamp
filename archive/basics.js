"use strict";
function adds(n1, n2, showResult, phrase) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("incorrect output");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + (n1 + n2));
  } else {
    return result;
  }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printoutput = true;
let resultPhrase = "Result is: ";
adds(number1, number2, printoutput, resultPhrase);
// console.log(result);
