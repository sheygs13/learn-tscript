const person: {
 name: string;
 age: number;
 hobbies: string[];
 // tuple
 role: [number, string]
} = {
 name: 'Olusegun',
 age: 24,
 hobbies: ['sports', 'cooking', 'meditating'],
 role: [2, 'author']
}

// exception
// person.role.push('admin');
// console.log(person);


let otherTodos: string[];
otherTodos = ['gym', 'movies'];

// console.log([...person.hobbies, ...otherTodos]);

// strictly assign the hobbies array 
// of  type 'array of strings'
// after destructuring

const { hobbies }: { hobbies: string[] } = person;
for (const hobby of hobbies) {
 console.log(hobby);
}