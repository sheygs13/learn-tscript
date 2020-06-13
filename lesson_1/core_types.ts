function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
 const add = num1 + num2;
 if (showResult) {
  console.log(phrase + add)
 }
 return add;
}
const num1 = 5;
const num2 = 6.4;
const printResult = true;
const resultPhrase = 'Result is: ';
sum(num1, num2, printResult, resultPhrase);