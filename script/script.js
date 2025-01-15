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

let lastStarTime = 0;

function createFallingStar() {
  const starContainer = document.getElementById("star-container");
  const star = document.createElement("div");
  star.classList.add("star");

  const startX = Math.random() * window.innerWidth;
  star.style.left = `${startX}px`;

  starContainer.appendChild(star);

  star.addEventListener("animationend", () => {
    star.remove();
  });
}

function animate(time) {
  if (time - lastStarTime > 300) {
    createFallingStar();
    lastStarTime = time;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);