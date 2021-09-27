// A FEATURE used to define multiple function abilities using different parameters
import { Combineable } from "../standard/UnionaliasTypeExample";
// Writen by doing the following

// /*
function add(var1: string, var2: string): string;
// if both args are the same type string then return the type described here :string
function add(var1: Combineable, var2: Combineable) {
  if (typeof var1 === "string" || typeof var2 === "string") {
    return var1.toString() + var2.toString();
  }
  return var1 + var2;
}
// line 6 and 8 work together using the var1 and var2 either with the type combinable or string.
// the name overload +1 +2 etc occurs when you have multiple functionalities for 1 function.

const res = add("true", "false");
res.split("");
// */
