function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemsList = document.getElementById('items');
    const newInputItem = document.createElement('li');

    newInputItem.textContent = inputElement.value;

    const deleteLink = document.createElement('a');
    deleteLink.textContent ='[Delete]';
    deleteLink.href = '#';

    deleteLink.addEventListener('click', () => {
        newInputItem.remove();
    });

    newInputItem.appendChild(deleteLink);


    itemsList.appendChild(newInputItem);

    inputElement.value = '';

}