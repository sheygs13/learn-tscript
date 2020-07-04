type Input = number | string;
// union type with string literal type
type Conversion = "as-number" | "as-text";

function combine(input1: Input, input2: Input, resultConversion: Conversion) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = `${String(input1)} ${String(input2)}`;
  }
  return result;
}

const combinedAges = combine(13, 12, "as-number");
const combinedStringAges = combine("13", 12, "as-number");
const combinedNames = combine("Olusegun", "Olaoluwa", "as-text");
