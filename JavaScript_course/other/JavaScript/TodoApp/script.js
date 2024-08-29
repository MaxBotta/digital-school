

//Wir suchen die HTML Liste und speichern es in einer Variablen
let todosElement = document.getElementById("todos");
let todoInput = document.getElementById("todo-input");

//Speichern aller Todos in einer List
let todos = getTodos();
drawTodosList();


//Neues Todo hinzufügen
function addTodo() {
    let value = todoInput.value;

    if (value !== "") {
        todos.unshift(value);
        todoInput.value = "";
        drawTodosList();
    }

}

//Todo löschen
function deleteTodo(position) {
    todos.splice(position, 1);

    //löschen der html liste und neu erstellen
    drawTodosList();
}

function drawTodosList() {
    todosElement.innerHTML = "";
    let id = 0;
    for (let todo of todos) {
        let li = document.createElement("li");
        li.id = id;
        li.innerHTML = `
                        <input type="checkbox"/>
                        ${todo} 
                        <button class="delete" onclick="deleteTodo(${id})">X</button>
                        `;
        todosElement.appendChild(li);
        id = id + 1;
    }
    saveTodos();
}

//Speichern der Todos Liste
function saveTodos() {
    console.log(todos)
    localStorage.setItem("todos-app", JSON.stringify(todos));
}

function getTodos() {
    let todos = localStorage.getItem("todos-app");
    return todos !== null ? JSON.parse(todos) : [];
}


/*
Löschen Funktion
1. Jedes Todo bekommt eine Nummer mit der Bezichnung ID
2. Jedes Todo bekommt einen löschen Button
3. Wenn auf den löschen Button gedrückt wird, dann wird die deleteTodo Funktion aufgerufen
4. Der deleteTodo Funktion wird die id (Also position des Todo in der List) als Parameter übergeben
5. deleteTodo entfernt das todo aus der todos List
6. deleteTodo zeichnet Todos Lsite im HTMl neu

*/

// Execute a function when the user presses a key on the keyboard
todoInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addTodo();
    }
});






