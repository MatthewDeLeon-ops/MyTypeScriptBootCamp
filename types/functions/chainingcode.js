"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
function add(var1, var2) {
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
console.log((_a = otherData === null || otherData === void 0 ? void 0 : otherData.job) === null || _a === void 0 ? void 0 : _a.description);
// way to check to see if something exists by placing a ? after the variable/term and if it does exist you can access the sublevel specified. This can help reduce runtime errors. [ This is called optional chaining and useful as well for nested objects]
