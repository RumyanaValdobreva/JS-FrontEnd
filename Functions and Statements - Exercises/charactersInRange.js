function solve(char1, char2) {

    let first = (char1.charCodeAt(0) < char2.charCodeAt(0)) ? char1 : char2;
    let second = (first === char1) ? char2 : char1;

    let charsBetween = ''

    let firstAscii = first.charCodeAt(0);
    let secondAscii = second.charCodeAt(0);

    for (let i = firstAscii + 1; i < secondAscii; i++) {
        charsBetween += String.fromCharCode(i) + " "
    }

    console.log(charsBetween)
}
 
solve('#',
':')