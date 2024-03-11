function solve(number1, number2, number3) {
    let negatives = 0;

    for (let num of [number1, number2, number3]) {
        if (num < 0) {
            negatives += 1
        }
    }

    if (negatives === 1 || negatives === 3) {
        console.log('Negative')
    } else {console.log('Positive')}

}

solve(5, 12, -15)