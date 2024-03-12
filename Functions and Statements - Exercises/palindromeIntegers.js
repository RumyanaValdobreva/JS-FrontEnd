function solve(numbers) {
    for (let num of numbers) {

        let number = num.toString().split('');
        let palindrome = true;

        if (number.length > 1) {
            if (number.pop() !== number.shift()) {
                palindrome = false;
            }
        }

        console.log(palindrome)
    }
}

solve([123,323,421,121]);