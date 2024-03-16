function solve(info) {
    const addressBook = {};

    info.forEach(entry => {
        const [name, address] = entry.split(':')

        addressBook[name] = address;
    });

    let sortedNames = Object.keys(addressBook).sort();

    sortedNames.forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`)
    })
    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])