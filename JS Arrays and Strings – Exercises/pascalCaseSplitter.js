function solve(text) {
    const matches = text.matchAll(/[A-Z][a-z]*/g);

    const words = Array.from(matches).map(match => match[0]);
    
    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')