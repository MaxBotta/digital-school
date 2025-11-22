const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usersUl = document.getElementById("users");

let users = [];

const storageUsers = localStorage.getItem("users");
if (storageUsers) {
  users = JSON.parse(storageUsers);
  renderUsers(users);
}

function addUser(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("Please fill in both name and email fields.");
    return;
  }

  const newUser = {
    name: name,
    email: email,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  renderUsers(users);

  nameInput.value = "";
  emailInput.value = "";
}

function searchUsers(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );
  console.log(filteredUsers);
  renderUsers(filteredUsers);
}

function deleteUser(user) {
  users = users.filter((u) => u !== user);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers(users);
}

function renderUsers(usersList) {
  usersUl.innerHTML = "";
  for (let user of usersList) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");

    h3.innerText = user.name;
    li.appendChild(h3);

    const p = document.createElement("p");
    p.innerText = user.email;
    li.appendChild(p);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteUser(user);

    li.appendChild(deleteButton);
    usersUl.appendChild(li);
  }
}
