function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = String(input1) + " " + String(input2);
    }
    return result;
}
var combinedAges = combine(13, 12, "as-number");
var combinedStringAges = combine("13", 12, "as-number");
var combinedNames = combine("Olusegun", "Olaoluwa", "as-text");
