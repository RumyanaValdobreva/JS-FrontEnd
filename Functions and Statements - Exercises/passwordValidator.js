function solve(password) {
    let isValidLength = password => password.length >= 6 && password.length <= 10;
    let isValidCombination = password => /^[a-zA-Z0-9]+$/.test(password);
    let atLeastTwoDigits = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;

    let isValid = true;

    if (!isValidLength(password)) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isValidCombination(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }
    if (!atLeastTwoDigits(password)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }
    if (isValid) {
        console.log("Password is valid");
    }

}

solve('logIn');