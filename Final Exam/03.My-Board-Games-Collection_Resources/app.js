function solve() {
  const baseURL = 'http://localhost:3030/jsonstore/games/';
  const nameInput = document.getElementById('g-name');
  const typeInput = document.getElementById('type');
  const playersInput = document.getElementById('players');
  const gamesList = document.getElementById('games-list');
  const addButton = document.getElementById('add-game');
  const loadButton = document.getElementById('load-games');
  const editGameButton = document.getElementById('edit-game');

  loadButton.addEventListener('click', loadButtonEvent);
  addButton.addEventListener('click', addButtonEvent);

  async function loadButtonEvent(event) {
      gamesList.innerHTML = '';

      const response = await fetch(baseURL);
      const data = await response.json();

      for (const game of Object.values(data)) {
          const containerDiv = document.createElement('div');
          containerDiv.className = 'board-game';

          const contentDiv = document.createElement('div');
          contentDiv.className = 'content';

          const gameNameParagraph = document.createElement('p');
          const name = game.name;
          gameNameParagraph.textContent = name;
          // gameNameParagraph.textContent = game.name;

          const typeParagraph = document.createElement('p');
          const type = game.type;
          typeParagraph.textContent = type;
          // typeParagraph.textContent = game.type;

          const playersParagraph = document.createElement('p');
          const players = game.players;
          playersParagraph.textContent = players;
          // playersParagraph.textContent = game.players;

          contentDiv.appendChild(gameNameParagraph);
          contentDiv.appendChild(playersParagraph);
          contentDiv.appendChild(typeParagraph);

          const buttonsContainer = document.createElement('div');
          buttonsContainer.className = 'buttons-container';
          
          const changeButton = document.createElement('button');
          changeButton.textContent = 'Change';
          changeButton.className = 'change-btn';
          changeButton.addEventListener('click', changeButtonEvent);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'delete-btn';
          deleteButton.addEventListener('click', deleteButtonEvent);

          buttonsContainer.appendChild(changeButton);
          buttonsContainer.appendChild(deleteButton);

          containerDiv.appendChild(contentDiv);
          containerDiv.appendChild(buttonsContainer);

          gamesList.appendChild(containerDiv);
          
          async function changeButtonEvent(event) {
              containerDiv.remove();

              nameInput.value = name;
              typeInput.value = type;
              playersInput.value = players;

              editGameButton.disabled = false;
              editGameButton.addEventListener('click', editGameEvent);
              addButton.disabled = true;
              
              async function editGameEvent(event) {
                  const editGame = {
                      name: nameInput.value,
                      type: typeInput.value,
                      players: playersInput.value,
                      '_id': game._id
                  }

                  await fetch(baseURL + game._id, {
                      method: 'PUT',
                      body: JSON.stringify(editGame)
                  })

                  editGameButton.disabled = true;
                  addButton.disabled = false;

                  loadButtonEvent();

                  nameInput.value = '';
                  typeInput.value = '';
                  playersInput.value = '';
              }
          }

          async function deleteButtonEvent(event) {
              await fetch(baseURL + game._id, {
                  method: 'DELETE'
              })

              loadButtonEvent();
          }
      }
  }

  async function addButtonEvent(event) {
      const newGame = {
          'name': nameInput.value,
          'type': typeInput.value,
          'players': playersInput.value
      }

      await fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(newGame)
      })

      loadButtonEvent();

      nameInput.value = '';
      typeInput.value = '';
      playersInput.value = '';
  }
}

solve()
