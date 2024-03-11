function solve(number, number2, operator) {
    console.log(calculator(number, number2, operator));

    function calculator(number, number2, operator) {
        switch (operator) {
            case 'multiply':
                return number * number2;
            case 'divide':
                return number / number2;
            case 'add':
                return number + number2;
            case 'subtract':
                return number - number2;
        }
    }
}

solve(5, 10, 'multiply')