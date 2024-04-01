function addItem() {
   const inputElement = document.getElementById('newItemText');
   const itemList = document.getElementById('items');
   const newItem = document.createElement('li');

   newItem.textContent = inputElement.value;

   itemList.appendChild(newItem);

   inputElement.value = '';
}