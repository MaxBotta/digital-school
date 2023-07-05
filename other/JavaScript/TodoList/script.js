

//Speichern aller Todos in einer List
let todos = [];
getTodos();

//Wir suchen die HTML Liste und speichern es in einer Variablen
let todosElement = document.getElementById("todos");
let todoInput = document.getElementById("todo-input");


//Neues Todo hinzufügen
function addTodo() {
    let value = todoInput.value;

    if (value !== "") {
        todos.unshift(value);
        todoInput.value = "";
        saveTodos();
        drawTodosList();
    }
}

//Todo löschen
function deleteTodo(position) {
    todos.splice(position, 1);
    saveTodos();
    //löschen der html liste und neu erstellen
    drawTodosList();
}

function drawTodosList() {
    todosElement.innerHTML = "";
    let position = 0;
    for (let todo of todos) {
        let li = document.createElement("li");
        li.id = position;
        li.innerHTML = `<input type="checkbox"/>
                        ${todo} 
                        <button class="delete" onclick="deleteTodo(${position})">x</button>`;
        todosElement.appendChild(li);
        position = position + 1;
    }
}

//Speichern der Todos Liste
function saveTodos() {
    localStorage.setItem("todo-app", JSON.stringify(todos));
}

function getTodos() {
    let savedTodos = localStorage.getItem("todo-app");
    if(savedTodos !== null) {
        todos = JSON.parse(savedTodos);
    } else {
        todos = [];
    }

}







