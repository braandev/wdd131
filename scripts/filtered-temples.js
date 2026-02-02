document.addEventListener("DOMContentLoaded", () => {

  // ===== FOOTER DATES =====
  const year = new Date().getFullYear();
  const currentYear = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  if (currentYear) {
    currentYear.textContent = `© ${year} Brandon Cazorla - Argentina`;
  }

  if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
  }

  // ===== TEMPLES DATA =====
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, USA",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, USA",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.8o2Einlpm2-aKl6QXxNaOgAAAA?pid=Api&P=0&h=180"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019-03-10",
      area: 40000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3547.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, USA",
      dedicated: "1974-11-19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986-01-10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986-01-17",
      area: 30659,
      imageUrl:
        "https://resizer.glanacion.com/resizer/yai9PFY4-_mcIyAozDKi9-7T4Pw=/1920x0/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OJCPHL2JGBHTFA4FPMRJPOAYGA.jpg"
    }
  ];

  const container = document.getElementById("temples-container");

  function displayTemples(list) {
    if (!container) return;

    container.innerHTML = "";

    list.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img 
          src="${temple.imageUrl}" 
          alt="${temple.templeName}" 
          loading="lazy"
          width="400"
          height="250"
        >
      `;

      container.appendChild(card);
    });
  }

  displayTemples(temples);

  // ===== FILTER BUTTONS =====
  function setupFilter(id, filterFn) {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(filterFn());
    });
  }

  setupFilter("home", () => temples);
  setupFilter("old", () => temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
  setupFilter("new", () => temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
  setupFilter("large", () => temples.filter(t => t.area > 90000));
  setupFilter("small", () => temples.filter(t => t.area < 10000));

  // ===== HAMBURGER MENU =====
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const main = document.getElementById("main");

  if (openMenu && closeMenu && mobileNav && main) {
    openMenu.addEventListener("click", () => {
      mobileNav.classList.add("active");
      main.classList.add("menu-open");
    });

    closeMenu.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      main.classList.remove("menu-open");
    });
  }

});
