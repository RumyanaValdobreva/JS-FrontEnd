function solve(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let element of array) {
        if (element %2 === 0) {
            oddSum += element
        }
        else {
            evenSum += element
        }
    }

    console.log(oddSum-evenSum)
}

solve([1,2,3,4,5,6])