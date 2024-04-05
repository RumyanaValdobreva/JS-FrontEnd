function addItem() {
   const inputNewItemText = document.getElementById('newItemText');
   const inputNewItemValue = document.getElementById('newItemValue');
   const selectMenuElement = document.getElementById('menu');

   const optionElement = document.createElement('option');
   optionElement.value = inputNewItemValue.value;
   optionElement.textContent = inputNewItemText.value;

   selectMenuElement.appendChild(optionElement);

   inputNewItemText.value = '';
   inputNewItemValue.value = '';
}