## Core Types

- `number` (`1, -5.6, -10`; All numbers - No differentiation between integers or floats)
- `string` (`'Hi'`, `Hi`, `"Hi"`) (All text values)
- `boolean` ( `true/false` )

- `object` ( `{ age: 25}` )
- `Array` (Any JS array, type can be flexible or strict (regarding the element types))
- `Tuple` (Added by Typescript: Fixed (type)-length array)
- `Enum` (enum { NEW, OLD } ) (Added by Typescript: Automatically enumerated global constant identifiers)
- `Any` `*` (Any kind of value, no specific type assignment )

- `union`(To combine multiple types into one type)

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

- `literal`

## Note

- TypeScript's type system only helps you during development (i.e. before the code get's compiled).
- The key difference is: JavaScript uses `"dynamic types"` (_resolved at runtime_) while TypeScript uses `"static types"` (_set during development_)
- When declaring a variable whose value is not known, always add the type of value to the variable.

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
