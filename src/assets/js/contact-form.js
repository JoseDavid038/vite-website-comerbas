import emailjs from '@emailjs/browser';

document.addEventListener('DOMContentLoaded', function() {
  loadComponent("contact-form", "/components/contact-form.html" , () => {
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

   if (window.location.pathname.includes("ips.html")|| window.location.pathname.includes("nosotros.html") ){
    titleForm.textContent = "Mejore la gestión de salud ocupacional en su empresa";
    paragraphForm.textContent = "Contamos con profesionales certificados y tecnología avanzada para realizar evaluaciones precisas, rápidas y confiables.";
   }else{
    titleForm.textContent = "Contáctanos";
    paragraphForm.textContent = "Estamos felices en brindarte ayuda en lo que necesites.";
   }
}

function setupForm() {

  const form = document.getElementById('contact__form');
  const recaptchaContainer = document.getElementById("recaptcha-container");

  if (!form || !recaptchaContainer) return;

  // Render the reCAPTCHA
  if (typeof grecaptcha !== "undefined") {
    grecaptcha.ready(() => {
      grecaptcha.render(recaptchaContainer, {
        sitekey: "6LeAGk8rAAAAAG77eJw_s7eid0UjdVftn2tyAPp2" 
      });
    });
  } else {
    console.error("grecaptcha not loaded");
  }


  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const consentCheckbox = document.getElementById("data-consent");
    const recaptchaResponse = grecaptcha.getResponse();

    if (!consentCheckbox.checked) {
      alert("You must agree to the data policy.");
      return;
    }

    if (!recaptchaResponse) {
      alert("Please verify that you are not a robot.");
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

}



