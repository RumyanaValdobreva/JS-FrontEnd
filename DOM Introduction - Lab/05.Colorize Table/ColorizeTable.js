function colorize() {
    const evenRows = document.querySelectorAll('table tr:nth-child(even)');

    // evenRows.forEach(element => element.style.backgroundColor = 'teal');

    for (element of evenRows) {
        element = element.style.backgroundColor = 'teal';
    }
}