function calc() {
    const firstNumber = document.getElementById('num1');
    const secondNumber = document.getElementById('num2');
    const sumOfElements = document.getElementById('sum');

    const firstNum = Number(firstNumber.value);
    const secondNum = Number(secondNumber.value);

    const sum = firstNum + secondNum;
    sumOfElements.value = sum;
}


