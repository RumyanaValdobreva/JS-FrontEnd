function solve(array) {
    const searchedWords = array
        .shift()
        .split(' ')
        .reduce((result, word) => {
            result[word] = 0;
            return result;
        }, {});

    for (const word of array) {
        if (searchedWords.hasOwnProperty(word)) {
            searchedWords[word] += 1;
        }
    }

    Object.entries(searchedWords)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`))

}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);