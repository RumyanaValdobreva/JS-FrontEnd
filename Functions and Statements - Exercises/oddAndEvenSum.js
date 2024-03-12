function solve(number) {
    let odd = 0;
    let even = 0;

    for (let element of number.toString()) {
        if (element % 2 === 0) {
            even += Number(element);
        }
        else {
            odd += Number(element);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

solve(1000435)