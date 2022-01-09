"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// typeGuards are a uniontype where we either have a string or Other type.
const moment_1 = __importDefault(require("moment"));
const actualdate = "2017-03-13";
const timeAndDate = (0, moment_1.default)(actualdate).format("YYYY-MM-DD");
function printUserDetails(cool) {
    console.log("name: " + cool.name);
    if ("privileges" in cool) {
        console.log("Privileges: " + cool.privileges);
    }
    if ("startDate" in cool) {
        console.log("begin Date: " + cool.startDate);
    }
}
printUserDetails({
    name: "Maxine Rhodes Joker",
    privileges: ["floor3", "floor 5", "tier 1 DBs", "S3"],
    startDate: timeAndDate,
});
// */
// typeguard docs https://www.typescriptlang.org/docs/handbook/advanced-types.html
//https://basarat.gitbook.io/typescript/type-system/typeguard
