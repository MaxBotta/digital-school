// Referenzen Html Element
const todosElement = document.querySelector("#todos");
const inputElement = document.querySelector("#todo-input");

// Liste aller Todos
let todos = [];

function addTodo() {
  const value = inputElement.value;
  todos.push(value);
  renderTodos();
}

function removeTodo(value) {
  todos = todos.filter((todo) => todo !== value);
  renderTodos();
}

function renderTodos() {
  // leere die ul liste im html
  todosElement.innerHTML = "";

  // Füge ein li für jedes Todo hinzu
  for (let todo of todos) {
    const liElmnt = document.createElement("li");
    liElmnt.innerText = todo;

    //Datum
    const dateElmnt = document.createElement("div");
    const currentDate = new Date();
    dateElmnt.classList.add("date");
      dateElmnt.innerText = currentDate.toLocaleDateString();
    liElmnt.appendChild(dateElmnt);

    // Erstelle löschen Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Entfernen";
    deleteBtn.onclick = () => removeTodo(todo);

    liElmnt.appendChild(deleteBtn);
    todosElement.appendChild(liElmnt);
  }
}
