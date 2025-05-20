document.addEventListener('DOMContentLoaded', function() {
  loadComponent("contact-form", "/components/contact-form.html" , () => {
    changeTitle();

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