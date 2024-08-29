


// // Register the service worker
// if ('serviceWorker' in navigator) {
//   // Wait for the 'load' event to not block other work
//   window.addEventListener('load', async () => {
//     // Try to register the service worker.
//     try {
//       const reg = await navigator.serviceWorker.register(swURL);
//       console.log('Service worker registered! 😎', reg);
//     } catch (err) {
//       console.log('😥 Service worker registration failed: ', err);
//     }
//   });
// }


const todoTextInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


let todos = [];
getTodos();
drawTodosList();


//Fügt ein neues Todo zur Liste hinzu
function addTodo() {
    let newTodo = todoTextInput.value;

    //Füge nur Todos mit Text hinzu
    if (newTodo !== "") {

        //Füge neues Todo zur List hinzu
        todos.unshift(newTodo);

        //Lösche Text aus Eingabefeld
        todoTextInput.value = "";

        saveTodos();
        drawTodosList();
    }
}

//Löschen eines todos aus der todos liste
function deleteTodo(position) {
    todos.splice(position, 1);

    saveTodos();
    drawTodosList();
}

function deleteAll() {
    todos = [];
    drawTodosList();
}

function drawTodosList() {
    //Lösche alles aus ul liste
    todoList.innerHTML = "";

    //Füge alle todos in die Liste ein
    let position = 0;
    for (let todo of todos) {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"/>
                        ${todo}
                        <button class="delete-button" onclick="deleteTodo(${position})">X</button>
                        `;
        todoList.appendChild(li);
        position++;
    }
    
}

//wir speichern unsere todos im localStorage des Browsers
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let savedTodos = localStorage.getItem("todos");

    //prüfe ob speicher leer ist
    if(savedTodos !== null) {
        todos = JSON.parse(savedTodos);
    } else {
        todos = [];
    }
}



// Execute a function when the user presses a key on the keyboard
todoTextInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        addTodo();
    }
});
