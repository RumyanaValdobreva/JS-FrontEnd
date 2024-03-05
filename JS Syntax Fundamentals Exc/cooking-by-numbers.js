function solve(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];
 
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop':
                number =  number / 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number = number * 3;
                console.log(number);
                break;
            case 'fillet':
                number = number * 0.80;
                console.log(number.toFixed(2));
                break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')