

let textElmt = document.getElementById("todo-text");
let todoList = document.getElementById("todo-list");


let todos = [];


function addTodo() {
    let newTodo = textElmt.value;

    if (newTodo !== "") {
        todos.unshift(newTodo);

        textElmt.value = "";
        todoList.innerHTML = "";

        for (let todo of todos) {
            let newLi = document.createElement("li");
            newLi.innerHTML = `<input type="checkbox" />${todo}`;
            todoList.appendChild(newLi);
        }
    }

}





// ""
// ''
// `` ${}