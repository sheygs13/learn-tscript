var button = document.querySelector('button[type="submit"]');
// The "!" means the variable cannot be null or undefined
// and is type casted using the "as HTMLInputElement"
var number1 = document.querySelector('#num1');
var number2 = document.querySelector('#num2');
function addNum(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    var result = addNum(+number1.value, +number2.value);
    console.log(result);
});
