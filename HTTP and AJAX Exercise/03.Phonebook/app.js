function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook'
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');
    const phonebook = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadButton.addEventListener('click', () => {
        phonebook.innerHTML = '';

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                        phonebook.appendChild(createEntryElement(entry));

                    });
            })
    });

    createButton.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personElement.value,
                phone: phoneElement.value,
            })
        })
            .then((response) => response.json())
            .then(entry => {
                const liElement = createEntryElement(entry);

                phonebook.appendChild(liElement);
                personElement.value = '';
                phoneElement.value = '';

            });
    });

    function createEntryElement({ _id, person, phone }) {
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            fetch(`${baseUrl}/${_id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    liElement.remove();
                });
        });

        liElement.appendChild(deleteButton);
        return liElement;
    }

}
attachEvents();
