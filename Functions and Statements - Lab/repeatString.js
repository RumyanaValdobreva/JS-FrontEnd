function repeated(string, number) {
    let result = '';

    while (number > 0) {
        result += string;
        number--;
    }

    return result;

    function solve(string, number) {
        console.log(repeated(string, number));
    }
}

solve("abc", 3)

// Second Option

// function solve(string, number) {
//     return string.repeat(number);
// }

// console.log(solve("abc", 3))