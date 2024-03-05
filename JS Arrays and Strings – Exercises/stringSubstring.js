// function solve(specialWord, text) {
//     const result = text.toLowerCase().includes(specialWord.toLowerCase());

//     if (result) {
//         console.log(specialWord);
//     } else {
//         console.log(`${specialWord} not found!`)
//     }
// }

// solve('python',
// 'JavaScript is the best programming language')

function solve(specialWord, text) {
    const words = text.toLowerCase().split(' ');
    const result = words.includes(specialWord.toLowerCase());

    if (result) {
        console.log(specialWord);
    } else {
        console.log(`${specialWord} not found!`)
    }
}

solve('python',
'JavaScript is the best programming language')