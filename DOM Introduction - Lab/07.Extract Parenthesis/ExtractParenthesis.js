function extract(content) {
    const contentElement = document.getElementById(content);

    const parenthesizedText = contentElement.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);

    const text = Array
        .from(parenthesizedText)
        .map(parenthesizedText => parenthesizedText[1])
        .join('; ');
    
    return text;
    
}