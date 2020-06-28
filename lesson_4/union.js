function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
}
var combined = combine("Olusegun", "Ekoh");
combined = combine("Olusegun", 1);
combined = combine(13, "12");
console.log(combined);
combined = combine(13, 12);
