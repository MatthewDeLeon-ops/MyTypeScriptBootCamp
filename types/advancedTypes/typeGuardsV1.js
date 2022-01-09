"use strict";
function printUserDetails(cool) {
    console.log("name: " + cool.name);
    if ("privileges" in cool) {
        console.log("Privileges: " + cool.privileges);
    }
    if ("startDate" in cool) {
        console.log("Start Date: " + cool.startDate);
    }
}
printUserDetails({ name: "maxine", privileges: "whatever", startDate: new Date() });
// */
