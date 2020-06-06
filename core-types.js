function sum(num1, num2, showResult, phrase) {
    var add = num1 + num2;
    if (showResult) {
        console.log(phrase + add);
    }
    return add;
}
var number1 = 5;
var number2 = 6.4;
var printResult = true;
var resultPhrase = 'Result is: ';
sum(number1, number2, printResult, resultPhrase);
