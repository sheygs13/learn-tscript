const person: {
  name: string;
  age: number;
  hobbies: string[];
  // tuple
  role: [number, string];
} = {
  name: "Olusegun",
  age: 24,
  hobbies: ["sports", "cooking", "surfing"],
  role: [2, "author"],
};

// exception
person.role.push("admin");
// console.log(person);

let otherTodos: string[];
otherTodos = ["gym", "movies"];
console.log([...person.hobbies, ...otherTodos]);

// Typescript strict destructuring
const { hobbies }: { hobbies: string[] } = person;
for (const hobby of hobbies) {
  console.log(hobby);
}
