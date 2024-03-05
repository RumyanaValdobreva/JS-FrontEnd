function solve(typeFruit, weight, price) {
    let weightPerKg = weight / 1000;
    let money = price * weightPerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightPerKg.toFixed(2)} kilograms ${typeFruit}.`)

}

solve('apple', 1563, 2.35)