function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
 const add = num1 + num2;
 if (showResult) {
  console.log(phrase + add)
 }
 return add;
}
const number1 = 5;
const number2 = 6.4;
const printResult = true;
const resultPhrase = 'Result is: ';
sum(number1, number2, printResult, resultPhrase);