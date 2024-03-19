function solve(text) {
    const elements = text.split(' ');
    const oddOccurrences = {};

    for (const el of elements) {
        if (!oddOccurrences.hasOwnProperty(el.toLowerCase())) {
            oddOccurrences[el.toLowerCase()] = 0;

        }
        oddOccurrences[el.toLowerCase()] += 1;

    }

    const result = [];

    for (const element in oddOccurrences) {
        if (oddOccurrences[element] % 2 !== 0) {
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');