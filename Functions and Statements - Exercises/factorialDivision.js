function solve(facNum, facNum2){

    function getFactorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }
 
    let result1 = getFactorial(facNum)
    let result2 = getFactorial(facNum2)

    console.log((result1 / result2).toFixed(2))
}

solve(5, 2); 