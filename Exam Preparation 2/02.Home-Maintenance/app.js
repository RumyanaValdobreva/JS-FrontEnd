window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
    const doneList = document.getElementById("done-list");
  
    addButtonElement.addEventListener("click", function () {
      const placeInput = document.getElementById("place");
      const actionInput = document.getElementById("action");
      const personInput = document.getElementById("person");
  
      const place = placeInput.value.trim();
      const action = actionInput.value.trim();
      const person = personInput.value.trim();
  
      if (place !== "" && action !== "" && person !== "") {
        const liElement = document.createElement("li");
        
        liElement.innerHTML = `
          <article>
            <p>Place: ${place}</p>
            <p>Action: ${action}</p>
            <p>Person: ${person}</p>
            <button class="edit">Edit</button>
            <button class="done">Done</button>
          </article>
        `;
  
        const editButtonElement = liElement.querySelector(".edit");

        editButtonElement.addEventListener("click", function () {
          placeInput.value = place;
          actionInput.value = action;
          personInput.value = person;

          taskList.removeChild(liElement);
        });
  
        const doneButtonElement = liElement.querySelector(".done");

        doneButtonElement.addEventListener("click", function () {
          taskList.removeChild(liElement);
          doneList.appendChild(liElement);
  
          const deleteButtonElement = document.createElement("button");
          deleteButtonElement.textContent = "Delete";
          deleteButtonElement.classList.add("delete");
  
          deleteButtonElement.addEventListener("click", function () {
            doneList.removeChild(liElement);
          });
  
          liElement.appendChild(deleteButtonElement);
          liElement.removeChild(editButtonElement);
          liElement.removeChild(doneButtonElement);
        });
  
        taskList.appendChild(liElement);
  
    
        placeInput.value = "";
        actionInput.value = "";
        personInput.value = "";

        }
    });
}