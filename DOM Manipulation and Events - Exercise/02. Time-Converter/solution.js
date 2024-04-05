function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[value=Convert]'); // ('input[type=button][value=Content]');
    const inputElements = document.querySelectorAll('input[type=text]');

    const toSeconds = (value, format) => {
        switch (format) {
            case 'days':
                return value * 24 * 60 * 60; 
            case 'hours':
                return value * 60 * 60; 
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        }
    };

    const convert = {
        days(seconds) {
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        },
    }


    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', (event) => {
            const currentInput = event.target.previousElementSibling;

            for (const inputElement of inputElements) {
                const seconds = toSeconds(Number(currentInput.value), currentInput.id)
                inputElement.value = convert[inputElement.id](seconds);
            }
        });
    }

}