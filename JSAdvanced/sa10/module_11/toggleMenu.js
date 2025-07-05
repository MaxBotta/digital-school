let isOpen = false;
const nav = document.querySelector("nav");

function toggleMenu() {
  if (!isOpen) {
    isOpen = true;
    nav.style.display = "flex";
  } else {
    isOpen = false;
    nav.style.display = "none";
  }
}
