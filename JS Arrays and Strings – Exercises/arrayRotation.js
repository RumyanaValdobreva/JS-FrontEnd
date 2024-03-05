function solve(array, rotations) {

    for (let x = 0; x < rotations; x++) {
        let firstNum = array[0];
        let newArray = [];
        for (let i = 1; i < array.length; i++) {
            newArray[i - 1] = array[i];
        }

        newArray[newArray.length] = firstNum;
        array = newArray;
    }

    console.log(array.join(' '));

}

// Second option

// function solve(array, rotations) {
//     for (let x = 0; x < rotations; x++) {
//         array.push(array.shift());
//     }

//     console.log(array.join(' '));
// }

solve([51, 47, 32, 61, 21], 2)