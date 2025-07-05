let isShrinked = false;

function shrinkHeader() {
  const header = document.querySelector("header");
  header.style.height = "80px";
  isShrinked = true;
}

function expandHeader() {
  const header = document.querySelector("header");
  header.style.height = "120px";
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
