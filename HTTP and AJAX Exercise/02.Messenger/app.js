function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const textArea = document.querySelector('textarea');

    function sendMessageEvent() {
        let author = document.getElementsByName('author')[0].value;
        let content = document.getElementsByName('content')[0].value;

        let message = {
            author,
            content
        }

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(message)
        });
    }

    function refreshEvent() {
        textArea.textContent = '';

        fetch(baseUrl)
            .then(response => response.json())
            .then(messages => {
                let messagesArr = [];
                for (let message of Object.values(messages)) {
                    messagesArr.push(`${message.author}: ${message.content}`);
                }
                textArea.textContent = messagesArr.join('\n');
            });
    }

    document.getElementById('submit').addEventListener('click', sendMessageEvent);
    document.getElementById('refresh').addEventListener('click', refreshEvent);
}

attachEvents();
