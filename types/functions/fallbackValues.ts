import { Combineable } from "../standard/UnionaliasTypeExample";

function add(var1: string, var2: string): string;
function add(var1: Combineable, var2: Combineable) {
  if (typeof var1 === "string" || typeof var2 === "string") {
    return var1.toString() + var2.toString();
  }
  return var1 + var2;
}
const values = add("true", "false");
values.split("");
//@ts-ignore
const othervalues = {
  value1: "url",
  value2: "name",
  value3: { values1: "ceo", values2: "company" },
};

const otherInput = "";
const storedData = otherInput ?? "Default";
// ?? means null or undefined but if its not null or undefined then the value selected is your fallback value in my example its "Default"
console.log(storedData);
