enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 2,
  AUTHOR = "AUTHOR",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Maxiless",
  age: 85,
  hobbies: ["sports", "coding".toLowerCase()],
};

console.log(`Name: ${person.name}, Hobbies: ${person.hobbies}`);
console.log(`Admin Role: ${Role.ADMIN}, Author: ${Role.AUTHOR}`);
