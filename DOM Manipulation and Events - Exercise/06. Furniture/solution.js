function solve() {
  const textAreaInput = document.querySelector('#exercise textarea:first-of-type');
  const textAreaOutput = document.querySelector('#exercise textarea:last-of-type');
  const buttonElement = document.querySelector('#exercise button:first-of-type');
  const buyButton = document.querySelector('#exercise button:last-of-type');
  const furnitureTable = document.querySelector('.table tbody');


  buttonElement.addEventListener('click', (event) => {
    const inputData = JSON.parse(textAreaInput.value);

    for (const data of inputData) {
      const imageElement = document.createElement('img');
      imageElement.src = data.img;

      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imageElement);

      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = data.name;

      const tdNameElement = document.createElement('td');
      tdNameElement.appendChild(paragraphElement);

      const priceElement = document.createElement('p');
      priceElement.textContent = data.price;

      const priceTdElement = document.createElement('td');
      priceTdElement.appendChild(priceElement);

      const decorationElement = document.createElement('p');
      decorationElement.textContent = data.decFactor;

      const decorationTdElement = document.createElement('td');
      decorationTdElement.appendChild(decorationElement);

      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';

      const checkboxTdElement = document.createElement('td');
      checkboxTdElement.appendChild(checkboxElement);

      const furnitureTrElement = document.createElement('tr');
      furnitureTrElement.appendChild(imageTdElement);
      furnitureTrElement.appendChild(tdNameElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decorationTdElement);
      furnitureTrElement.appendChild(checkboxTdElement);

      furnitureTable.appendChild(furnitureTrElement);
    }
  });

  buyButton.addEventListener('click', (event) => {
      let totalPrice = 0;
      let decorationFactor = 0;
      let checkboxChildren = 0;
      let names = [];

    Array
      .from(furnitureTable.children)
      .forEach(furnitureTr => {
        const checkInput = furnitureTr.querySelector('input[type=checkbox]');

        if (!checkInput.checked) {
          return;
        }

        const nameElement = furnitureTr.children[1].textContent;
        const price = Number(furnitureTr.children[2].textContent);
        const decoration = Number(furnitureTr.children[3].textContent);


        names.push(nameElement);
        totalPrice += price;
        decorationFactor += decoration;
        checkboxChildren ++;
      });

      const averageDecorationFactor = decorationFactor / checkboxChildren;

      textAreaOutput.textContent += `Bought furniture: ${names.join(', ')}\n`;
      textAreaOutput.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textAreaOutput.textContent += `Average decoration factor: ${averageDecorationFactor}`;
  });

}