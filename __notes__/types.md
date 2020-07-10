## Core Types

- `number` (`1, -5.6, -10`; All numbers - No differentiation between integers or floats)
- `string` (`'Hi'`, `Hi`, `"Hi"`) (All text values)
- `boolean` ( `true/false` )

- `object` ( `{ age: 25}` )
- `Array` (Any JS array, type can be flexible or strict (regarding the element types))
- `Tuple` (Added by Typescript: Fixed (type)-length array)
- `Enum` (enum { NEW, OLD } ) (Added by Typescript: Automatically enumerated global constant identifiers)
- `Any` `*` (Any kind of value, no specific type assignment )
- `void` (Return type of nothing)

- `union types`(To combine multiple types into one type)

```ts
function print(text: string | string[]): string {
  if (typeof text === "string") {
    return text;
  }

  // compiler now knows that you can use join
  // and that variable type is definitely string[]

  return text.join(" ");
}

let x = print("hello text");
let y = print(["hello", "text", "array"]);
```

- `literal types` (particularly useful when used in conjunction with literal types)

  - `string literal types`

- `Function`
- `never` - Used in positions where there will not or should not be a value.
- `unknown` - Used where there will be a value, but it might have any type.

## Note

- TypeScript's type system only helps you during development (i.e. before the code get's compiled).
- The key difference is: JavaScript uses `"dynamic types"` (_resolved at runtime_) while TypeScript uses `"static types"` (_set during development_)
- When declaring a variable whose value is not known, always add the type of value to the variable.
- The `type` keyword is used to define an alias for a type.

```ts
let count: number;
count = 0;
function multiply() {
  return (count += 5);
}
```

- With Tuples we can define what type of data (variable type) can be stored in every position ( or few starting positions ) inside of an array. Tuples are very useful if you know the type of data in advance. The `push` method in array is the only exception that negates the fixed-length of Tuples.

## Ways of Declaring Objects

```ts
// good
const person: {
  name: string;
  email: string;
  // optional
  phone?: string;
} = {
  name: "Olusegun",
  email: "segunolaoluwa@gmail.com",
  phone: "08053482938",
};

// better
const person = {
  name: "Olusegun",
  email: "segunolaoluwa@gmail.com",
  phone: "08053482938",
};
```

## Ways of Declaring Arrays

```ts
// Method 1
const str: string[] = ["post", "get", "put"];
const nums: number[] = [5, 4, -6.45];

// Method 2
let fruits: Array<string> = ["Apples", "Oranges", "Bananas"];
```

```ts
// implicit return type
function add(n1: number, n2: number) {
  return n1 + n2;
}

// explicit return type
function add(n1: number, n2: number): string {
  return String(n1) + String(n2);
}

// void return type
function printResult(n: number) {
  console.log("Num: ", n);
}
```

## Functions

### Generic Function Type

```ts
let sum: Function;

sum = () => {
  console.log("Generic");
};
console.log(sum());
```

### Function Return Type

```ts
function add(): string {
  return "5";
}

let sum: () => string;
sum = add;
console.log(sum());
```

### Strict Function Return Type

```ts
function add(s1: number, s2: number): number {
  return s1 + s2;
}

let sum: (n1: number, n2: number) => number;
sum = add;
console.log(sum(5, 7));
```
