function solve(names) {

    const employeeNames = {};

    for (const name of names) {
        employeeNames[name] = name.length;
    }

    for (const employee in employeeNames) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeNames[employee]}`);
    }
}

// SECOND OPTION

// function solve(employeeNames) {
//     const employees = [];

//     for (const name of employeeNames) {
//         const employee = {
//             name,
//             personalNumber: name.length
//         }

//         employees.push(employee);
//     }

//     for (const employee of employees) {
//         console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
//     }
// }

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

