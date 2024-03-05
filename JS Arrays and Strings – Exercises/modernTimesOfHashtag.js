function solve(text) {
    const word = /#([a-zA-Z]+)/g;

    const matches = text.matchAll(word);
    for (const match of matches) {
        console.log(match[1]);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')