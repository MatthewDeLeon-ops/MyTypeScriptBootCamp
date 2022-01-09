"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
const combinedage = combine("30", "26", "as-number");
console.log(combinedage);
const combinedstringages = combine("30", "29", "as-number");
console.log(combinedstringages);
const combinedname = combine("max", "Anna", "as-text");
console.log(combinedname);
