function solve() {
    const textArea = document.getElementById('input');
    const text = textArea.value;
    const outputElement = document.getElementById('output');

    const result = text
        .split('.')
        .filter(sentence => !!sentence)
        .reduce((result, sentence, index) => {
            const resultIndex = Math.floor(index / 3);
            if (!result[resultIndex]) {
              result[resultIndex] = [];
            }

            result[resultIndex].push(sentence.trim());

            return result;
        },[])
        .map(arraySentences => `<p>${arraySentences.join('. ')}.</p>`)
        .join('\n');
    
  outputElement.innerHTML = result;
}