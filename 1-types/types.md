## TypeScript Core Types

- `number` (`1, -5.6, -10`; All numbers - No differentiation between integers or floats)
- `string` (`'Hi'`, `Hi`, `"Hi"`) (All text values)
- `boolean` ( `true/false` )


TypeScript's type system only helps you during development (i.e. before the code get's compiled).
The key difference is: JavaScript uses `"dynamic types"` (_resolved at runtime_) while TypeScript uses `"static types"` (_set during development_)
When declaring a variable whose value is not known, always add the type of value to the variable

```ts
let count: number;
count = 0;
function multiply() {
   return count+=5;
}

```