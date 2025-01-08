// Homepagina
let homePageT = document.getElementsByClassName("homepagina-title")[0];
let homePageD = document.getElementsByClassName("homepagina-description")[0];
// Nav-links en burger menu
let burgerInput = document.querySelectorAll(".burger-menu-input")[0];
let navbarDiv = document.querySelectorAll(".nav-links")[0];
if (homePageT && homePageD) {
  setTimeout(() => {
    homePageT.classList.add("visible");
    homePageD.classList.add("visible");
  }, 200);
}

burgerInput.addEventListener("change", () => {
  if (burgerInput.checked) {
    navbarDiv.classList.add("active");
  } else {
    navbarDiv.classList.remove("active");
  }
});