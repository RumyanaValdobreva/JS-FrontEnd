function solve (firstName, lastName, hairColor) {
    const data = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    };

    const getJson = JSON.stringify(data);

    console.log(getJson);
}

solve('George', 'Jones', 'Brown');