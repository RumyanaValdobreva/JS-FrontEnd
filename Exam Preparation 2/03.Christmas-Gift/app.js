const baseUrl = 'http://localhost:3030/jsonstore/gifts';
const loadPresent = document.getElementById('load-presents');
const addPresent = document.getElementById('add-present');
const editPresent = document.getElementById('edit-present');
const giftList = document.getElementById('gift-list');
const giftInput = document.getElementById('gift');
const forInput = document.getElementById('for');
const priceInput = document.getElementById('price');
const formContainer = document.getElementById('form');

loadPresent.addEventListener('click', loadPresents);

addPresent.addEventListener('click', addPresent);

editPresent.addEventListener('click', editGift);

giftList.addEventListener('click', deleteGift);

function addPresent() {
    const present = getInputData();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(present)
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            clearFields();

            return loadPresents();
        });
}

async function loadPresents() {
    const response = await fetch(baseUrl);
    const presentsResult = await response.json();

    giftList.innerHTML = '';

    const giftListFragment = document.createDocumentFragment();

    Object
        .values(presentsResult)
        .forEach(present => {
            giftListFragment.appendChild(createGiftSock(present));
        })

    giftList.appendChild(giftListFragment);
}

function createGiftSock(present) {
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', (e) => changeGift(e, present));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-container');
    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    const giftParapraph = document.createElement('p');
    giftParapraph.textContent = present.gift;

    const forParagraph = document.createElement('p');
    forParagraph.textContent = present.for;

    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = present.price;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.appendChild(giftParapraph);
    contentDiv.appendChild(forParagraph);
    contentDiv.appendChild(priceParagraph);

    const giftSockDiv = document.createElement('div');
    giftSockDiv.classList.add('gift-sock');
    giftSockDiv.appendChild(contentDiv);
    giftSockDiv.appendChild(buttonsDiv);

    giftSockDiv.setAttribute('data-id', present._id);

    return giftSockDiv;
}

function changeGift(event, present) {
    const giftElement = event.currentTarget.parentElement.parentElement;
    giftElement.remove();

    giftInput.value = present.gift;
    forInput.value = present.for;
    priceInput.value = present.price;

    formContainer.setAttribute('data-id', present._id);

    editPresent.removeAttribute('disabled');

    addPresent.setAttribute('disabled', 'disabled');
}

function editGift() {
    const present = getInputData();

    const giftId = formContainer.getAttribute('data-id');

    formContainer.removeAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: giftId, ...present }),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

        loadPresents();

        editPresent.setAttribute('disabled', 'disabled');

        addPresent.removeAttribute('disabled');

        clearFields();
        });
}

function deleteGift(event) {
    if (event.target.tagName !== 'BUTTON' || !event.target.classList.contains('delete-btn'))  {
        return;
    }

    const giftElement = event.target.parentElement.parentElement;

    const giftId = giftElement.getAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            giftElement.remove();
        });
}

function clearFields() {
    giftInput.value = '';
    forInput.value = '';
    priceInput.value = '';
}

function getInputData() {
    return {
        gift: giftInput.value,
        for: forInput.value,
        price: priceInput.value
    }
};
