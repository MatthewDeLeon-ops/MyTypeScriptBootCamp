// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "matt",
    age: 21,
    hobbies: ["sports", "dating".toLowerCase()],
    role: [3, "admins"]
};
person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
