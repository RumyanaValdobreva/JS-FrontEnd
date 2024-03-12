function solve(num1, num2, num3) {
    let sum = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let result = subtract(sum(num1, num2), num3);

    console.log(result)
}

solve(23, 6, 10)