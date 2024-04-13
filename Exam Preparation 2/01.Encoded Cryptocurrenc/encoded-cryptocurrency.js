function solve(input) {
    let message = input.shift();

    for (const line of input) {
        if (line === "Buy") {
            break;
        }

        const [command, substring, replacement] = line.split("?");

        switch (command) {
            case "TakeEven":
                message = takeEven(message);
                break;
            case "ChangeAll":
                message = changeAll(message, substring, replacement);
                break;
            case "Reverse":
                message = reverse(message, substring);
                break;
        }
    }

    console.log(`The cryptocurrency is: ${message}`);

    function takeEven(str) {
        let result = "";
        for (let i = 0; i < str.length; i += 2) {
            result += str[i];
        }
        console.log(result);
        return result;
    }

    function changeAll(str, substring, replacement) {
        const regex = new RegExp(substring, "g");
        const result = str.replace(regex, replacement);
        console.log(result);
        return result;
    }

    function reverse(str, substring) {
        if (str.includes(substring)) {
            const index = str.indexOf(substring);
            const reversed = substring.split("").reverse().join("");
            const result = str.slice(0, index) + str.slice(index + substring.length) + reversed;
            console.log(result);
            return result;
        } else {
            console.log("error");
            return str;
        }
    }
}


solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",

"TakeEven",

"Reverse?!nzahc",

"ChangeAll?m?g",

"Reverse?adshk",

"ChangeAll?z?i",

"Buy"]);