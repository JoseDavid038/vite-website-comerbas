
document.addEventListener('DOMContentLoaded', function() {
  loadComponent("header", "/components/header.html" , () => {
    
    setNavLinks();
    // Modify button text based on the page
    setupNavButtons();   // Ensure nav button updates correctly
    setupMenu();  // Ensure hamburger menu works after header loads

  });

  loadComponent("footer", "/components/footer.html", () => {
     setNavLinks2();
  });
    
});

// Function to fetch and load components
function loadComponent(tag, file, callback = null){
  fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(tag).innerHTML = data;
        if (callback) callback();  // Ensure the callback runs after loading
      })
      .catch(error => console.error(`Error loading ${file}:`,error));
}


// Function to update the call-to-action button in the navbar
function setupNavButtons(){

  const textCallToActionButton = document.querySelector('.js-text-button');
  const iconElement = document.querySelector('.js-ri-handbag-line');
  const CallToActionButton = document.querySelector('.js-button-menu');
  const navMenu = document.getElementById('nav-menu');
  const navDropdown = document.getElementById('nav-drop');
  const navLinks = document.querySelectorAll('.js-nav__link');
  const onlineServices = document.querySelector('.js-online-services');
  const navMenu2 = document.querySelector('.js-nav__menu');
  const navDropdown2 = document.getElementById('nav-drop2');

  // Check if the button exists before modifying it
 if (!textCallToActionButton || !iconElement) return;

  // show or hid the botton online services. 
 if (onlineServices) {
  if (!(window.location.pathname === "/" || window.location.pathname.includes("index.html"))) {
    // No mostrar ni ocupar espacio
    onlineServices.classList.remove("online-services-button-show");
    onlineServices.remove();
    navMenu2.style.gap = "0"; // elimina espacio entre elementos
    navMenu2.style.justifyContent = "space-around"; // cambia de space-between

  } else {
    // show the button.
    onlineServices.classList.add("online-services-button-show");
    onlineServices.addEventListener('click', () => {
        navDropdown2.classList.toggle('dropdown__container-desktop');
        navMenu.classList.toggle('nav__menu-dropdown');
        navDropdown2.classList.toggle('show-menu');
      });

  }
 }

    document.addEventListener('click', function(event) {
  const dropdown1 = document.getElementById('nav-drop');   // Empresas
  const dropdown2 = document.getElementById('nav-drop2');  // Personas
  const menu = document.getElementById('nav-menu');
  const onlineServicesButton = document.querySelector('.js-online-services');
  const buttonEmpresas = document.querySelector('.js-button-menu');

  const clickedInsideDropdown1 = dropdown1 && dropdown1.contains(event.target);
  const clickedInsideDropdown2 = dropdown2 && dropdown2.contains(event.target);
  const clickedOnlineServices = onlineServicesButton && onlineServicesButton.contains(event.target);
  const clickedEmpresas = buttonEmpresas && buttonEmpresas.contains(event.target);

  const isMobile = window.matchMedia("(max-width: 1150px)").matches;

  // ---- Manejo para dropdown de Empresas (#nav-drop) ----
  const dropdown1IsVisible = dropdown1 &&
    (dropdown1.classList.contains('show-menu') || !dropdown1.classList.contains('dropdown__container-desktop'));

  if (dropdown1 && dropdown1IsVisible && !clickedInsideDropdown1 && !clickedEmpresas) {
    dropdown1.classList.remove('show-menu');
    menu.classList.remove('nav__menu-dropdown');

    // Restaurar en desktop
    if (!isMobile) {
      dropdown1.classList.add('dropdown__container-desktop');
    }
  }

  // ---- Manejo para dropdown de Personas (#nav-drop2) ----
  const dropdown2IsVisible = dropdown2 &&
    (dropdown2.classList.contains('show-menu') || !dropdown2.classList.contains('dropdown__container-desktop'));

  if (dropdown2 && dropdown2IsVisible && !clickedInsideDropdown2 && !clickedOnlineServices) {
    dropdown2.classList.remove('show-menu');
    menu.classList.remove('nav__menu-dropdown');

    // Restaurar en desktop
    if (!isMobile) {
      dropdown2.classList.add('dropdown__container-desktop');
    }
  }
});

document.addEventListener('click', function(event) {
  const isDropdownButton = event.target.closest('.dropdown__button, .dropdown__button2');

  if (isDropdownButton) {
    const navMenu = document.getElementById('nav-menu');
    const dropdown1 = document.getElementById('nav-drop');
    const dropdown2 = document.getElementById('nav-drop2');

    // Oculta menús
    if (dropdown1) {
      dropdown1.classList.remove('show-menu');
      dropdown1.classList.add('dropdown__container-desktop');
    }

    if (dropdown2) {
      dropdown2.classList.remove('show-menu');
      dropdown2.classList.add('dropdown__container-desktop');
    }

    if (navMenu) {
      navMenu.classList.remove('show-menu');
      navMenu.classList.remove('nav__menu-dropdown');
    }
  }
});





 if (window.location.pathname.includes("empresas.html")) {
  
   textCallToActionButton.textContent = "Trámites empresariales";
   // Remove any existing <i> before adding a new one
   iconElement.classList.replace("ri-handbag-line", "ri-device-line");
   CallToActionButton.classList.add('button--menu-tramites');

   CallToActionButton.addEventListener('click', () =>{
    // navMenu.classList.add('nav__menu-dropdown');
    // navDropdown.classList.add('show-menu');
    navDropdown.classList.toggle('dropdown__container-desktop');
    navMenu.classList.toggle('nav__menu-dropdown');
    navDropdown.classList.toggle('show-menu');

   
  })

   


 }else if (window.location.pathname.includes("ips.html")){
   textCallToActionButton.textContent = "Afilia tu empresa ahora";
   iconElement.classList.replace("ri-handbag-line", "ri-customer-service-2-fill");
    // Redirect **when the button is clicked**
    textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
     event.preventDefault(); // Prevent default link behavior
     window.location.href = "#contact-form";
    });

 }else if (window.location.pathname.includes("nosotros.html")){
  textCallToActionButton.textContent = "Afilia tu empresa ahora";
  iconElement.classList.replace("ri-handbag-line", "ri-customer-service-2-fill");
   // Redirect **when the button is clicked**
   textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "#contact-form";
   });

}else{
   textCallToActionButton.textContent = textCallToActionButton.dataset.text || "Tienda en línea Comerbas"; // Default text
   iconElement.classList.replace( "ri-device-line" ,"ri-handbag-line"); // Ensure default icon

   navMenu2.classList.add('nav__menu2');

   textCallToActionButton.closest(".nav__link").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "/index.html";
    });
    // if (onlineServices) {
    //   onlineServices.classList.add('online-services-button-show');

    //   onlineServices.addEventListener('click', () =>{
    //   navDropdown2.classList.toggle('dropdown__container-desktop');
    //   navMenu.classList.toggle('nav__menu-dropdown');
    //   navDropdown2.classList.toggle('show-menu');
    
    //   });
    // }
   
 };

 // Cierra el menú cuando se hace clic en cualquier botón del dropdown #nav-drop2
    const dropdownButtons = document.querySelectorAll('#nav-drop2 .button');

    dropdownButtons.forEach(button => {
      button.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        const navDropdown2 = document.getElementById('nav-drop2');

        navMenu.classList.remove('show-menu');
        navMenu.classList.remove('nav__menu-dropdown');
        navDropdown2.classList.remove('show-menu');
      });
    });

};


// Function to handle navigation links and active class

function setNavLinks(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "/src/pages/empresas.html",
        "Para Personas": "/src/pages/index.html",
        "IPS": "/src/pages/ips.html",
        "Sobre nosotros": "/src/pages/nosotros.html",
      };

       // Add active class based on the current page
    if (window.location.pathname === pageMap[link.textContent.trim()]) {
      navLinks.forEach(l => l.classList.remove("active-link")); // Remove from all
      link.classList.add("active-link");
    }

    // Add event listener for clicks
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();

      if (pageMap[page]) {
        window.location.href = pageMap[page];
      };
    });
  });

};



function setNavLinks2(){

  const navLinks = document.querySelectorAll('.js-nav__link');

  navLinks.forEach(link => {

    // handle navigation links

      const pageMap = {
        "Para Empresas": "/src/pages/empresas.html",
        "Para Personas": "/src/pages/index.html",
        "IPS": "/src/pages/ips.html",
        "Sobre nosotros": "/src/pages/nosotros.html",
        "Protección de Datos": "/public/docs/Politica_tratamiento_datos.pdf"
      };

    // Add event listener for clicks
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = link.textContent.trim();

      if (pageMap[page]) {
        window.location.href = pageMap[page];
      };
    });
  });

};




// menu

function setupMenu(){

  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
  const navDropdown = document.getElementById('nav-drop');
   const navDropdown2 = document.getElementById('nav-drop2');
        // CallToActionButton = document.querySelector('.js-button-menu');

    // menu show

  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
    })
  }

  // menu hidden

  if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
    navMenu.classList.remove('nav__menu-dropdown');
    navDropdown.classList.remove('show-menu');
    navDropdown2.classList.remove('show-menu');
  })
  }

  // menu dropdown

  // if(CallToActionButton){
  //   CallToActionButton.addEventListener('click', () =>{
  //     navDropdown.classList.add('show-menu');
  //   })
  // }

  // menu dropdown hidden

  // if(CallToActionButton){
  //   CallToActionButton.addEventListener('click', () =>{
  //     navDropdown.classList.remove('show-menu');
  //   })
  //   }


  // remove menu mobile
  // when we click on each nav__link, we remove  the show-menu close. 
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () =>{
  // const navMenu = document.getElementById('nav-menu'); no es necesario volverla a declarar.
    if (window.location.pathname.includes("index.html")){
      navMenu.classList.remove('show-menu');
    }
  }

  navLink.forEach(n => n.addEventListener('click', linkAction));

};



 