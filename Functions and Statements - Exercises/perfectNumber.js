function solve(num) {
    let divisors = 0

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors += i
        }
    }

    if (divisors === num) {
        console.log("We have a perfect number!")
    }
    else {console.log("It's not so perfect.")}
}

solve(6);