function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    const firstNum = Number(firstNumber.value);
    const secondNum = Number(secondNumber.value);

    result.textContent = firstNum - secondNum;
}