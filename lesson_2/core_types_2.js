var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var person = {
    name: "Olusegun",
    age: 24,
    hobbies: ["sports", "cooking", "meditating"],
    role: [2, "author"]
};
// exception
person.role.push("admin");
// console.log(person);
var otherTodos;
otherTodos = ["gym", "movies"];
console.log(__spreadArrays(person.hobbies, otherTodos));
/*
  strictly assign the hobbies array
  of  type 'array of strings'
  after destructuring
*/
var hobbies = person.hobbies;
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
