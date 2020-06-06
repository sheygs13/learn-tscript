const button = document.querySelector('button[type="submit"]');
// The "!" means the variable cannot be null or undefined
// and is type casted using the "as HTMLInputElement"
const number1 = document.querySelector('#num1')! as HTMLInputElement;
const number2 = document.querySelector('#num2')! as HTMLInputElement;

function addNum(num1: number, num2: number) {
 return num1 + num2;
}


button.addEventListener('click', () => {
 const result = addNum(+number1.value, +number2.value);
 console.log(result);
});