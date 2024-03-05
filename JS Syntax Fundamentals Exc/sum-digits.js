function solve(number) {
    let sum = 0;
    let str = number.toString();

    for (let i = 0; i < str.length; i++) {
        let currentResult = str[i];
        sum += Number(currentResult)
    }
    console.log(sum)

}

solve(97561)