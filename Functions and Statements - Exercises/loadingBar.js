function solve(percentage) {

    if (percentage === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
        return
    }

    let loadingBar = ""

    for (let i = 1; i <= percentage / 10; i++) {
        loadingBar += '%'
    }

    console.log(`${percentage}% [${loadingBar.padEnd(10, ".")}]`);
    console.log('Still loading...');
}

solve(30);