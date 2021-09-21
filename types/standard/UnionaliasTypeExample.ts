/*

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

*/

type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: ConversionDescriptor, // literal type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}
const combinedAge = combine("30", "26", "as-number");
console.log(combinedAge);

const combinedStringAge = combine("30", "29", "as-number");
console.log(combinedStringAge);

const combinedName = combine("max", "Anna", "as-text");
console.log(combinedName);
