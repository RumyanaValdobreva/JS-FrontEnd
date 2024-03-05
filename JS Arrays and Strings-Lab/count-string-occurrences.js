function solve(text, word) {

    let words = text.split(' ');
    let occurrences = 0;

    for (let element of words) {
        if (element === word) {
            occurrences++;
        }
    }

    console.log(occurrences)
}

solve('This is a word and it also is a sentence',

'is')