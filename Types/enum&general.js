var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Matt",
    age: 21,
    hobbies: ["sports", "coding".toLowerCase()]
};
console.log("Name: " + person.name + ", Hobbies: " + person.hobbies);
console.log("Admin Role: " + Role.ADMIN + ", Author: " + Role.AUTHOR);
