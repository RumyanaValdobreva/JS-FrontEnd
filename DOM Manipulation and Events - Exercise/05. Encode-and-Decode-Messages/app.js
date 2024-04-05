function encodeAndDecodeMessages() {
    const firstTextElement = document.getElementsByTagName('textarea')[0];
    const secondTextElement = document.getElementsByTagName('textarea')[1];
    const buttonElement = document.querySelector('main :nth-child(1) button');
    const decodeButtonElement = document.querySelector('main :nth-child(2) button');
 
    buttonElement.addEventListener('click', function () {
        const receivedMessage = firstTextElement.value;
        let result = [];
 
        for (const message of receivedMessage) {
            let newMessage = String.fromCharCode(message.charCodeAt(0) + 1);
            result.push(newMessage);
        }

        firstTextElement.value = "";
        secondTextElement.value = result.join('');
    });
 
    decodeButtonElement.addEventListener('click', function () {
        const receivedMessage = secondTextElement.value;
        let result = [];
 
        for (const message of receivedMessage) {
            let newMessage = String.fromCharCode(letter.charCodeAt(0) - 1);
            result.push(newMessage);
        }

        secondTextElement.value = result.join('');
    });
}
