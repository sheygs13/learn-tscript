function combine(
  input1: number | string,
  input2: number | string,
  // union type with string literal type
  resultConversion: "as-number" | "as-text"
) {
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
