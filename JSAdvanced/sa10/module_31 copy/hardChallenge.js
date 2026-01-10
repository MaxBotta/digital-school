const contactsElmt = document.querySelector("#contacts");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

let contacts = []; // {name: "Max", email: "max.botta@gmx.de"}[]

function addContact() {
  const name = nameInput.value;
  const email = emailInput.value;

  const newContact = {
    name: name,
    email: email,
  };

  contacts.push(newContact);
  renderContacts()
}

function renderContacts() {
  contactsElmt.innerHTML = "";
  for (let contact of contacts) {
    const li = document.createElement("li");
    li.innerText = contact.name + " " + contact.email;
    contactsElmt.appendChild(li);
  }
}
