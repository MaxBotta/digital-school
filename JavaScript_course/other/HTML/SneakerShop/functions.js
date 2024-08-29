

var items = [];
var mouse = {
    x: 0,
    y: 0
};
var height = window.innerHeight;
var width = window.innerWidth;

function getMousePos(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(mouse.x, mouse.y);
}


// var cartItems = document.getElementById("cart-items");
// cartItems.addEventListener("mouseover", function() {
//     cartItems.classList.add("show");
// })

var database = {
    "air-jordan-1": {
        name: "Air Jordan 1",
        price: 199.99,
        inStock: 3
    },
    "sneaker-2": {
        name: "Sneaker 2",
        price: 299.99,
        inStock: 5
    }
}

function addToCart(id) {
    var cart = document.getElementById("cart");
    var cartItems = document.getElementById("cart-items");
    items.push(id);
    cart.innerText = items.length;
    cartItems.innerHTML = "";

    var totalPrice = 0;

    for(let e of items) {
        let newItem = document.createElement("li");
        newItem.className = "cart-item";
        let name = document.createElement("div");
        name.innerText = database[e].name;
        let price = document.createElement("div");
        price.innerText = database[e].price;
        newItem.appendChild(name);
        newItem.appendChild(price);
        cartItems.appendChild(newItem);
        totalPrice += database[e].price;
    }

    let newItem = document.createElement("li");
    newItem.className = "cart-item total-price";
    let name = document.createElement("div");
    name.innerText = "Total:";
    let price = document.createElement("div");
    price.innerText = "$" + (totalPrice).toFixed(2);
    newItem.appendChild(name);
    newItem.appendChild(price);
    cartItems.appendChild(newItem);
}

document.body.addEventListener("mousemove", () => {
    moveObjectWithMouse("header-img")
});
function moveObjectWithMouse(id) {
    let elmt = document.getElementById(id);
    let x = (mouse.x - width/2) / 60;
    let y = (mouse.y - height/2) / 60; 
    elmt.style.transform = `translate(${x}px, ${y}px)`;
}

