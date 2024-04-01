function toggle() {
    const buttonElement = document.querySelector('.head span.button');
    const informationElement = document.getElementById('extra');

    const currentButton = buttonElement.textContent;

    if (currentButton === 'More') {
        informationElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        informationElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}