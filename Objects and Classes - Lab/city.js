function solve(city) {
    Object.keys(city).forEach(property => console.log(`${property} -> ${city[property]}`))
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});