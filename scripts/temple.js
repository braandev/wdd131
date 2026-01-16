const year = new Date().getFullYear();
document.getElementById("currentyear").innerHTML =
  `© ${year} 🧑‍💻 Brandon Cazorla 🧑‍💻 Argentina`;

document.getElementById("lastModified").innerHTML =
  `Last Modification: ${document.lastModified}`;



const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");
const main = document.getElementById("main");


openMenu.addEventListener("click", () => {
  mobileNav.classList.add("active");
  main.classList.add("menu-open");
});


closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  main.classList.remove("menu-open");
});

