function solve(number) {
    let times = 0;
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        times += 1
        result = times * number
        console.log(`${number} X ${times} = ${result}`)
    }
}

solve(2)