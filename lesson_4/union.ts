function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
}

let combined = combine("Olusegun", "Ekoh");
combined = combine("Olusegun", 1);
combined = combine(13, "12");
combined = combine(13, 12);
