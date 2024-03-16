function solve(info) {
    const phoneBook = {};

    for (const contact of info) {
        const [personName, phoneNumber] = contact.split(' ')

        phoneBook[personName] = phoneNumber
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    } 
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])