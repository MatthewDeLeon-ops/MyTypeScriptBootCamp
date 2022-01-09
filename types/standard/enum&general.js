"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maxiless",
    age: 85,
    hobbies: ["sports", "coding".toLowerCase()],
};
console.log(`Name: ${person.name}, Hobbies: ${person.hobbies}`);
console.log(`Admin Role: ${Role.ADMIN}, Author: ${Role.AUTHOR}`);
