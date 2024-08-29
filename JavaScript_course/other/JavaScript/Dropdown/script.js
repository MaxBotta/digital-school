
let isShown = false; //Boolean

function toggleSideWindow() {
    let sideWindow = document.querySelector("#js-side-window");

    if(isShown === false) {
        isShown = true;
        sideWindow.style.right = "0";
    } else {
        isShown = false;
        sideWindow.style.right = "-500px";
    }

}


function toggleText(e) {
   let p =  e.parentNode.querySelector("p");
   if(p.style.opacity === "1") {
        p.style.opacity = "0";
        e.innerText = "Show Text"
   } else {
        p.style.opacity = "1";
        e.innerText = "Hide Text"
   }
}






let todos = [];

function addTodo() {
    let input = document.querySelector("#js-todo-input")
    let value = input.value;

    input.value = "";

    let todoList = document.querySelector("#js-todo-list");
    let newTodo = document.createElement("li");
    newTodo.innerHTML = `
        <div class="todo">
            <div class="checkmark" onclick="toggleChecked(this)"></div>
            <div class="value">${value}</div>
        <div>
    `;

    todos.push({
        value: value,
        checked: false
    });

    // <button class="remove" onclick="removeTodo(this)">x</button>
    todoList.appendChild(newTodo);
}

function toggleChecked(button) {
    console.log("toggle")
    if(button.classList.contains("checked")) {
        button.classList.remove("checked");
    } else {
        button.classList.add("checked");
    }
    
}

function removeTodo(e) {
    let todoList = document.querySelector("#js-todo-list");
    todoList.removeChild(e.parentNode.parentNode);
}


