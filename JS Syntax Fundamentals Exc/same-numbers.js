function solve(number) {
    let numberStr = number.toString();
    let isConsistent = true;
    let sum = Number(numberStr[0]);

    for (let i = 1; i < numberStr.length; i++) {
        if (numberStr[0] !== numberStr[i]) {
            isConsistent = false;
        }

        sum += Number(numberStr[i]);
    }

    console.log(isConsistent);
    console.log(sum)
}

solve(2222222)