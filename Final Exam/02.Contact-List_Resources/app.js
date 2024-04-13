window.addEventListener("load", solve);

function solve() {
  const formElement = document.querySelector('form');
  const nameElement = document.getElementById('name');
  const numberElement = document.getElementById('phone');
  const categoryElement = document.getElementById('category');

  const addButtonElement = document.getElementById('add-btn');
  addButtonElement.addEventListener('click', addButtonEvent);

  function addButtonEvent () {
      if (nameElement.value === "" || numberElement.value === "" || categoryElement.value === "") {
          return;
      }

      const checkList = document.getElementById('check-list');
      const contactList = document.getElementById('contact-list');

      const checkLiElement = document.createElement('li');
      
      const buttonDivElement = document.createElement('div');
      buttonDivElement.setAttribute('class', 'buttons');

      const checkArticleElement = document.createElement('article');

      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = `name:${nameElement.value}`;
      const name = nameElement.value;

      const phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = `phone:${numberElement.value}`;
      const phone = numberElement.value;

      const categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = `category:${categoryElement.value}`;
      const category = categoryElement.value;

      checkArticleElement.appendChild(nameParagraph);
      checkArticleElement.appendChild(phoneParagraph);
      checkArticleElement.appendChild(categoryParagraph);

      const editButton = document.createElement('button');
      editButton.setAttribute('class', 'edit-btn')
      editButton.addEventListener('click', editButtonEvent);

      const saveButton = document.createElement('button');
      saveButton.setAttribute('class', 'save-btn');
      saveButton.addEventListener('click', saveButtonEvent);

      buttonDivElement.appendChild(editButton);
      buttonDivElement.appendChild(saveButton);

      checkLiElement.appendChild(checkArticleElement);
      checkLiElement.appendChild(buttonDivElement);

      checkList.appendChild(checkLiElement);

      formElement.reset();

      function editButtonEvent () {
          nameElement.value = name;
          numberElement.value = phone;
          categoryElement.value = category;

          checkList.removeChild(checkLiElement);
      }

function saveButtonEvent() {
  const saveContactLiElement = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'del-btn');

  deleteButton.addEventListener('click', deleteButtonEvent);
  saveContactLiElement.appendChild(checkArticleElement);
  saveContactLiElement.appendChild(deleteButton);
  contactList.appendChild(saveContactLiElement);
  checkList.removeChild(checkLiElement);

  function deleteButtonEvent () {
      contactList.removeChild(saveContactLiElement);
  }
}

  }
}