function solve(number, array) {
    let newArray = [];

    for (let i = 0; i < number; i++) {
        newArray.push(array[i]);
    }

    console.log(newArray.reverse().join(' '));
}

solve(4, [-1, 20, 99, 5])