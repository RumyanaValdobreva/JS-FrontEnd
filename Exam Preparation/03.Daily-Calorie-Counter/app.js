const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const idUrl = 'http://localhost:3030/jsonstore/tasks:id';
const loadButton = document.getElementById('load-meals');
const addButton = document.getElementById('add-meal');
const editButton = document.getElementById('edit-meal');
const mealList = document.getElementById('list');
const foodElement = document.getElementById('food');
const timeElement = document.getElementById('time');
const caloriesElement = document.getElementById('calories');

let currentMeal;

const loadMeals = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    mealList.innerHTML = '';

    for (const meal of Object.values(data)) {
        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-meal');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-meal');

        const buttonMeals = document.createElement('div');
        buttonMeals.id = 'meal-buttons';

        buttonMeals.appendChild(changeButton);
        buttonMeals.appendChild(deleteButton);

        const foodH2 = document.createElement('h2');
        foodH2.textContent = meal.food;

        const timeH3 = document.createElement('h3');
        timeH3.textContent = meal.time;

        const caloriesH3 = document.createElement('h3');
        caloriesH3.textContent = meal.calories;

        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');

        mealElement.appendChild(foodH2);
        mealElement.appendChild(timeH3);
        mealElement.appendChild(caloriesH3);
        mealElement.appendChild(buttonMeals);

        mealList.appendChild(mealElement);

        changeButton.addEventListener('click', () => {
            currentMeal = meal._id;

            foodElement.value = meal.food;
            timeElement.value = meal.time;
            caloriesElement.value = meal.calories;

            editButton.removeAttribute('disabled');

            addButton.setAttribute('disabled', 'disabled');

            mealElement.remove();
        });

        deleteButton.addEventListener('click', async () => {
            const response = await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                return;
            }

            mealElement.remove();
        });
    }

};

loadButton.addEventListener('click', loadMeals);

editButton.addEventListener('click', async () => {
    const food = foodElement.value;
    const time = timeElement.value;
    const calories = caloriesElement.value;



    const response = await fetch(`${baseUrl}/${currentMeal}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentMeal,
            food,
            calories,
            time
        })
    });

    if (!response.ok) {
        return;
    }

    await loadMeals();

    editButton.setAttribute('disabled', 'disabled');

    addButton.removeAttribute('disabled');

    currentMeal = '';

    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';

});

addButton.addEventListener('click', async () => {
    const food = foodElement.value;
    const time = timeElement.value;
    const calories = caloriesElement.value;

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            food,
            time,
            calories
        })
    });

    if (!response.ok) {
        return;
    }

    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';

    await loadMeals();

});
