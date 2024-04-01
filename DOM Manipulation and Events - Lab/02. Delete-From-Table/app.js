function deleteByEmail() {
    const inputEmail = document.querySelector('input[name="email"]');
    const result = document.getElementById('result');
    const tableRows = document.querySelectorAll('table#customers tbody tr');

    const tableRowElement = Array.from(tableRows).find(element => element.children[1].textContent.includes(inputEmail.value))

    if (tableRowElement) {
        tableRowElement.remove();

        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.';
    }

    inputEmail.value = '';
}