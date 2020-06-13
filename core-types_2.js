var person = {
    name: 'Olusegun',
    age: 24,
    hobbies: ['sports', 'cooking', 'meditating'],
    role: [2, 'author']
};
person.role.push('admin');
console.log(person);
var otherTodos;
otherTodos = ['gym', 'movies'];
// console.log([...person.hobbies, ...otherTodos]);
// strictly assign the hobbies array 
// of  type 'array of strings'
// after destructuring
var hobbies = person.hobbies;
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
