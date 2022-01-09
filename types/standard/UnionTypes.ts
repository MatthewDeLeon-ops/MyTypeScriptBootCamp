function combined(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combined(30, 26);
console.log(combinedAges);

const combinedNames = combined("max", "Anna");
console.log(combinedNames);
