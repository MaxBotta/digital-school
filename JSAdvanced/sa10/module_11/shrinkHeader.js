const logo = document.querySelector("#logo");
const header = document.querySelector("header");
let isShrinked = false;

function shrinkHeader() {
  logo.style.height = "40px";
  header.style.padding = "10px 20px";
  isShrinked = true;
}

function expandHeader() {
  logo.style.height = "60px";
  header.style.padding = "20px";
  isShrinked = false;
}

addEventListener("scroll", () => {
  if (!isShrinked && window.scrollY >= 100) {
    shrinkHeader();
  }
  if (isShrinked && window.scrollY < 100) {
    expandHeader();
  }
});
