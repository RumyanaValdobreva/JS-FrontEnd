function solve(numbers) {
    let sortedNums = numbers.sort((a, b) => a - b);
    const result = [];

    while(sortedNums.length > 0) {
        let firstNumber = sortedNums.shift();
        let lastNumber = sortedNums.pop();

        result.push(firstNumber, lastNumber);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))