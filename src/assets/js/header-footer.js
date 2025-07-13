document.addEventListener('DOMContentLoaded', function() {
  loadComponent("header", "components/header.html", () => {
    setNavLinks();
    setupNavButtons();
    setupMenu();
  });

  loadComponent("footer", "components/footer.html", () => {
    setNavLinks2();
  });
});

// Function to fetch and load components
function loadComponent(tag, file, callback = null){
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(tag).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

// Actualiza rutas relativas según ubicación
function getBasePath() {
  return window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, "/");
}

// Function to update the call-to-action button in the navbar
function setupNavButtons(){
  const textCallToActionButton = document.querySelector('.js-text-button');
  const iconElement = document.querySelector('.js-ri-handbag-line');
  const CallToActionButton = document.querySelector('.js-button-menu');
  const navMenu = document.getElementById('nav-menu');
  const navDropdown = document.getElementById('nav-drop');
  const navMenu2 = document.querySelector('.js-nav__menu');
  const navDropdown2 = document.getElementById('nav-drop2');
  const onlineServices = document.querySelector('.js-online-services');

  if (!textCallToActionButton || !iconElement) return;


  // charge index.html with all features
  const pathname = window.location.pathname;
  const isHomePage = pathname.endsWith("/") || pathname.includes("index.html");

  if (onlineServices) {
    if (!isHomePage) {
      onlineServices.classList.remove("online-services-button-show");
      onlineServices.remove();
      navMenu2.style.gap = "0";
      navMenu2.style.justifyContent = "space-around";
    } else {
      onlineServices.classList.add("online-services-button-show");
      onlineServices.addEventListener('click', () => {
        navDropdown2.classList.toggle('dropdown__container-desktop');
        navMenu.classList.toggle('nav__menu-dropdown');
        navDropdown2.classList.toggle('show-menu');
      });
    }
  }


  document.addEventListener('click', function(event) {
    const dropdown1 = document.getElementById('nav-drop');
    const dropdown2 = document.getElementById('nav-drop2');
    const menu = document.getElementById('nav-menu');
    const clickedInsideDropdown1 = dropdown1 && dropdown1.contains(event.target);
    const clickedInsideDropdown2 = dropdown2 && dropdown2.contains(event.target);
    const clickedOnlineServices = onlineServices && onlineServices.contains(event.target);
    const clickedEmpresas = CallToActionButton && CallToActionButton.contains(event.target);
    const isMobile = window.matchMedia("(max-width: 1150px)").matches;

    if (dropdown1 && dropdown1.classList.contains('show-menu') && !clickedInsideDropdown1 && !clickedEmpresas) {
      dropdown1.classList.remove('show-menu');
      menu.classList.remove('nav__menu-dropdown');
      if (!isMobile) dropdown1.classList.add('dropdown__container-desktop');
    }

    if (dropdown2 && dropdown2.classList.contains('show-menu') && !clickedInsideDropdown2 && !clickedOnlineServices) {
      dropdown2.classList.remove('show-menu');
      menu.classList.remove('nav__menu-dropdown');
      if (!isMobile) dropdown2.classList.add('dropdown__container-desktop');
    }
  });

  if (window.location.pathname.includes("empresas.html")) {
    textCallToActionButton.textContent = "Trámites empresariales";
    iconElement.classList.replace("ri-handbag-line", "ri-device-line");
    CallToActionButton.classList.add('button--menu-tramites');

    CallToActionButton.addEventListener('click', () => {
      navDropdown.classList.toggle('dropdown__container-desktop');
      navMenu.classList.toggle('nav__menu-dropdown');
      navDropdown.classList.toggle('show-menu');
    });

  } else if (window.location.pathname.includes("ips.html") || window.location.pathname.includes("nosotros.html")) {
    textCallToActionButton.textContent = "Afilia tu empresa ahora";
    iconElement.classList.replace("ri-handbag-line", "ri-customer-service-2-fill");

    textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "#contact-form";
    });

  } else {
    textCallToActionButton.textContent = textCallToActionButton.dataset.text || "Tienda en línea Comerbas";
    iconElement.classList.replace("ri-device-line", "ri-handbag-line");
    navMenu2.classList.add('nav__menu2');

    textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
      event.preventDefault();
      // window.location.href = "expectativa.html";
      // window.open("expectativa.html", "_blank", "noopener");
      window.open(`${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}expectativa.html`, "_blank", "noopener");

    });
  }

  const dropdownButtons = document.querySelectorAll('#nav-drop2 .button');
  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navMenu.classList.remove('nav__menu-dropdown');
      navDropdown2.classList.remove('show-menu');
    });
  });
}

function setNavLinks() {
  const navLinks = document.querySelectorAll('.js-nav__link');
  const base = getBasePath(); // por ejemplo: "/vite-website-comerbas/"

  const pageMap = {
    "Para Empresas": base + "empresas.html",
    "Para Personas": base + "index.html",
    "IPS": base + "ips.html",
    "Sobre nosotros": base + "nosotros.html",
  };

  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkText = link.textContent.trim();
    const expectedPath = new URL(pageMap[linkText], window.location.origin).pathname;

    // ✅ Comparamos solo el pathname sin query ni hash
    if (currentPath === expectedPath) {
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    }

    // 🚫 Evita errores si el texto no coincide
    if (pageMap[linkText]) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = pageMap[linkText];
      });
    }
  });
}


function setNavLinks2() {
  const navLinks = document.querySelectorAll('.js-nav__link');
  const base = getBasePath();

  const pageMap = {
    "Para Empresas": base + "empresas.html",
    "Para Personas": base + "index.html",
    "IPS": base + "ips.html",
    "Sobre nosotros": base + "nosotros.html",
    "Protección de Datos": base + "docs/Politica_tratamiento_datos.pdf"
  };

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();
      if (pageMap[page]) {
        window.location.href = pageMap[page];
      }
    });
  });
}

function setupMenu(){
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navDropdown = document.getElementById('nav-drop'),
        navDropdown2 = document.getElementById('nav-drop2');

  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      navMenu.classList.remove('nav__menu-dropdown');
      navDropdown.classList.remove('show-menu');
      navDropdown2.classList.remove('show-menu');
    });
  }

  const navLink = document.querySelectorAll('.nav__link');
  const linkAction = () => {
    if (window.location.pathname.includes("index.html")){
      navMenu.classList.remove('show-menu');
    }
  };

  navLink.forEach(n => n.addEventListener('click', linkAction));
}
