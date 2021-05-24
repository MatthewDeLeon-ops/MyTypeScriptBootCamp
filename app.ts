// const person: {
//   name: string;
//   age: number;
// } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "matt",
  age: 21,
  hobbies: ["sports", "dating".toLowerCase()],
  role: [3, "admins"],
};

person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities;
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
