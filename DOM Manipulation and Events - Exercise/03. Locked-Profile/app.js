function lockedProfile() {
    const profile = document.querySelectorAll('.profile');

    for (const profileElement of profile) {
        const buttonElement = profileElement.querySelector('button');
        const lockElement = profileElement.querySelector('input[type=radio][value=lock]')

        buttonElement.addEventListener('click', (event) => {
            if (lockElement.checked) {
                return;
            }

            const informationElement = buttonElement.previousElementSibling;

            if (buttonElement.textContent === 'Show more') {
                informationElement.style.display = 'block';
                buttonElement.textContent = 'Hide it';
            } else {
                informationElement.style.display = 'none';
                buttonElement.textContent = 'Show more';
            }

        });
    }
}