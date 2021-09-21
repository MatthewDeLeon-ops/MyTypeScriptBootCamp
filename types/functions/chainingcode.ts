// /*
function add(var1: string, var2: string): string;
function add(var1: Combineable, var2: Combineable) {
  if (typeof var1 === "string" || typeof var2 === "string") {
    return var1.toString() + var2.toString();
  }
  return var1 + var2;
}
const other = add("true", "false");
other.split("");
// */
const otherData = {
  id: "url",
  name: "name",
  job: { title: "ceo", description: "company" },
};
console.log(otherData?.job?.description);
// way to check to see if something exists by placing a ? after the variable/term and if it does exist you can access the sublevel specified. This can help reduce runtime errors. [ This is called optional chaining and useful as well for nested objects]
