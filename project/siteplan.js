//CONST FULL YEAR
const year = new Date().getFullYear();

document.getElementById("year").innerHTML = `© ${year} Spartacus - Todos los derechos reservados`;

document.getElementById("lastmodified").innerHTML = `Last modified: ${document.lastModified}`


// PART OF THE MENU HAMBURGUER
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

//PART OF THE FORM

const subscriptions = [
  { id: "basic", name: "Basic Plan" },
  { id: "standard", name: "Standard Plan" },
  { id: "premium", name: "Premium Plan" }
];

const select = document.querySelector("#option");

// Cargar opciones dinámicamente
subscriptions.forEach(sub => {
  const option = document.createElement("option");
  option.value = sub.id;
  option.textContent = sub.name;
  select.appendChild(option);
});


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita recargar la página

  const name = document.querySelector(".name-input").value;
  const email = document.querySelector(".email-input").value;
  const subscription = document.querySelector("#option").value;
  const newsletter = document.querySelector("#newslatter").checked;

  const userData = {
    name: name,
    email: email,
    subscription: subscription,
    newsletter: newsletter
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  alert(`Thanks for subscribing, ${name}! 💪`);

  form.reset();
});
