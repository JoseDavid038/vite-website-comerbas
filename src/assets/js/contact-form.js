import emailjs from '@emailjs/browser';

document.addEventListener('DOMContentLoaded', function() {
  loadComponent("contact-form", "components/contact-form.html" , () => {
    changeTitle();
    setupForm();
      
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



function changeTitle(){
   const titleForm = document.querySelector('.js-title-form');
   const paragraphForm = document.querySelector('.js-paragraph-form');

   if (window.location.pathname.includes("ips.html")){
    titleForm.textContent = "Mejora la salud ocupacional en tu empresa";
    paragraphForm.textContent = "contáctanos, estamos para brindarte el mejor servicio.";
   }else if (window.location.pathname.includes("index.html")){
    titleForm.textContent = "Estamos para ayudarte";
    paragraphForm.textContent = "Contáctanos,  Somos felices en brindarte ayuda en lo que necesites.";
   }else{
    titleForm.textContent = "Mejora el bienestar de tu empresa";
    paragraphForm.textContent = "contáctanos, estamos para brindarte el mejor servicio.";
   }
}

let recaptchaWidgetId = null;

function setupForm() {

  const form = document.getElementById('contact__form');
  const recaptchaContainer = document.getElementById("recaptcha-container");

  if (!form || !recaptchaContainer) return;

  // Render the reCAPTCHA
  // if (typeof grecaptcha !== "undefined") {
  //   grecaptcha.ready(() => {
  //     if (recaptchaWidgetId === null) {
  //       recaptchaWidgetId = grecaptcha.render(recaptchaContainer, {
  //         sitekey: "6LeAGk8rAAAAAG77eJw_s7eid0UjdVftn2tyAPp2"
  //       });
  //     }
  //   });
  // } else {
  //   console.error("grecaptcha not loaded");
  // }


  if (typeof grecaptcha !== "undefined") {
  grecaptcha.ready(() => {
    // Verifica si el contenedor ya tiene contenido renderizado (previene doble renderizado)
    if (recaptchaContainer.innerHTML.trim() === "") {
      recaptchaWidgetId = grecaptcha.render(recaptchaContainer, {
        sitekey: "6LeAGk8rAAAAAG77eJw_s7eid0UjdVftn2tyAPp2"
      });
    } else {
      console.log("reCAPTCHA ya renderizado");
    }
      });
  }



  // Handle form submission

  if (!form.dataset.listenerAdded) {

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const consentCheckbox = document.getElementById("data-consent");
    const recaptchaResponse = grecaptcha.getResponse();

    if (!consentCheckbox.checked) {
      alert("Debes aceptar la politica de tratamiento de datos.");
      return;
    }

    if (!recaptchaResponse) {
      alert("Por favor confirma que no eres un robot.");
      return;
    };


  emailjs.sendForm('service_m1pa9ia', 'template_zdq9of5', this, 'K0jm7Mkr3VCbKfM0l')
        .then(() => {
          alert('Mensaje enviado con éxito.');
          form.reset();
          grecaptcha.reset();
        }, (error) => {
          console.error('Error al enviar el mensaje:', error);
          alert('Ocurrió un error. Inténtalo de nuevo.');
        });
      });

      form.dataset.listenerAdded = "true"; // Avoid duplicate listeners
}


}
