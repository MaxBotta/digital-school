const names = document.querySelector("#names").children;

function searchFilter(inputEl) {
  const value = inputEl.value;

  for (let name of names) {
    if (name.innerText.includes(value)) {
      name.style.display = "block";
    } else {
      name.style.display = "none";
    }
  }
}
