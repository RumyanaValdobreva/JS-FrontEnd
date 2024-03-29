function extractText() {
    const items = document.getElementById('items');
    const result = document.getElementById('result');

    result.value = items.textContent;
}

extractText();