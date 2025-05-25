  const openBtn = document.getElementById("open-btn");
  const closeBtn = document.getElementById("close-btn");
  const nav = document.getElementById("mobile-nav");
  const hamburguerContainer = document.getElementById("hamburguer-container");

  openBtn.addEventListener("click", () => {
    nav.classList.remove("hidden");
    hamburguerContainer.style.display = "none"; // Oculta el botón ABRIR
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.add("hidden");
    hamburguerContainer.style.display = "block"; // Muestra el botón ABRIR
  });

  

const full = document.querySelector("#LastModified");



const today = new Date();
const time = new Date();

full.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
        timeStyle: "medium"
	}
).format(today)}</span>`;






