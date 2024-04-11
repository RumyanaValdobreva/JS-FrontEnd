function solve(input){
    let baristasArray = [];
 
    for (let index = 1; index <= parseInt(input[0]); index++) {
        let barista = {};
        barista['name'] = input[index].split(' ')[0];
        barista['shift'] = input[index].split(' ')[1];
        barista['drinks'] = input[index].split(' ')[2].split(',');
        baristasArray.push(barista);
    }
 
    for (let index = parseInt(input[0]) + 1; index < input.length; index++) {
        let command = input[index].split(' / ');
        
        if (command[0] === 'Closed') {
            break;
        } else if (command[0] === 'Prepare') {
            let name = command[1];
            let shift = command[2];
            let drink = command[3];
            
            let found = false;
            for (let index = 0; index < baristasArray.length; index++) {
                if (baristasArray[index].name === name) {
                    if (baristasArray[index].shift === shift && baristasArray[index].drinks.includes(drink)) {
                        console.log(`${name} has prepared a ${drink} for you!`);
                    } else {
                        console.log(`${name} is not available to prepare a ${drink}.`);
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log(`${name} is not a barista.`);
            }
        } else if (command[0] === 'Change Shift') {
            let name = command[1];
            let newShift = command[2];
            
            let found = false;
            for (let index = 0; index < baristasArray.length; index++) {
                if (baristasArray[index].name === name) {
                    baristasArray[index].shift = newShift;
                    console.log(`${name} has updated his shift to: ${newShift}`);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log(`${name} is not a barista.`);
            }
        } else if (command[0] === 'Learn') {
            let name = command[1];
            let newDrink = command[2];
            
            let found = false;
            for (let index = 0; index < baristasArray.length; index++) {
                if (baristasArray[index].name === name) {
                    if (!baristasArray[index].drinks.includes(newDrink)) {
                        baristasArray[index].drinks.push(newDrink);
                        console.log(`${name} has learned a new coffee type: ${newDrink}.`);
                    } else {
                        console.log(`${name} knows how to make ${newDrink}.`);
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log(`${name} is not a barista.`);
            }
        }
    }
 
    for (let index = 0; index < baristasArray.length; index++) {
        let name = baristasArray[index].name;
        let shift = baristasArray[index].shift;
        let drinks = baristasArray[index].drinks.join(', ');
        console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${drinks}`);        
    }
}


solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );
