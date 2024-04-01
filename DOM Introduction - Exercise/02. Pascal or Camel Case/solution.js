function solve() {
  const textExample = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const pascalCase = (textExample) =>
    textExample
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  const convertor = {
    'Pascal Case': pascalCase,
    'Camel Case' : (textExample) => pascalCase(textExample)[0].toLowerCase() + pascalCase(textExample).slice(1)
  };

  if (!convertor[namingConvention]) {
    result.textContent = 'Error!';
    return;
  }

  result.textContent = convertor[namingConvention](textExample);
  
}