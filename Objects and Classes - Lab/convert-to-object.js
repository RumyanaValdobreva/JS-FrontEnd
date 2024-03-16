function solve (info) {
    const getObject = JSON.parse(info);

    Object.keys(getObject).forEach(key => console.log(`${key}: ${getObject[key]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');