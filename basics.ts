const button = document.querySelector('button[type="submit"]');
const number1 = document.querySelector('#num1');
const number2 = document.querySelector('#num2');

function addNum(num1, num2) {
 return +num1 + +num2;
}


button.addEventListener('click', () => {
 const result = addNum(number1.value, number2.value);
 console.log(result);
});