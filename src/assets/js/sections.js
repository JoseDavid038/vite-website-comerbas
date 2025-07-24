async function loadComponent (selector, componentPath, data = {}) {
  const container = document.querySelector(selector);
  if(!container) return;

  //Fetch the HTML component
  const response = await fetch(componentPath);
  const html = await response.text();

  //Insert the component into the page
  container.innerHTML = html;

  //Populate dynamic content
  container.querySelector(".section-image").src = data.image || "images/company-logo.png";
  container.querySelector(".js-section-title").textContent = data.title || "Comerbas";
  container.querySelector(".js-section-paragraph").textContent = data.paragraph || "Comerbas";
  if (container.querySelector(".js-section-paragraph2")) {
    container.querySelector(".js-section-paragraph2").textContent = data.paragraph2 || "";
  }
  if (container.querySelector(".js-section-itemList")) {
    container.querySelector(".js-section-itemList").textContent = data.itemList || "Comerbas";
  }
  if (container.querySelector(".js-section-button")){
  container.querySelector(".js-section-button").textContent = data.buttonText || "Comerbas";
  }// container.querySelector(".button--services").href = data.buttonLink || "#";
  const button = container.querySelector(".button--services");
  if (button) {
    button.href = data.buttonLink || "#";
  }

 // Populate the list items
 const listItems = container.querySelectorAll(".js-section-itemList");
 if (data.list && data.list.length === listItems.length) {
   listItems.forEach((item, index) => {
     item.textContent = data.list[index];
   });
 }
}



loadComponent("#section-1", "components/sections.html", {
  image: "images/services/service-optometria-test.webp",
  title: "Optometría Laboral",
  paragraph: "Ofrecemos evaluaciones precisas y certificadas que le permiten a tu empresa tomar la mejor decisión y garantizar un entorno laboral seguro.",
  list: ["Evaluación completa de la agudeza visual lejana y cercana.", "Pruebas de percepción de profundidad y discriminación de colores.", "Recomendaciones específicas según el puesto de trabajo.", "Prevención de riesgos visuales ocupacionales."],
  buttonText: "Contáctanos para saber más",
  buttonLink: "#contact-form"
});


loadComponent("#section-2", "components/section2.html", {
  image: "images/services/service-psicology.webp",
  title: "Psicología Laboral",
  paragraph: "Evaluamos los factores psicosociales que influyen en el desempeño y bienestar de tus colaboradores, identificando fortalezas y oportunidades de mejora para optimizar el ambiente laboral.",
  list: ["Evaluación de riesgos bio-psicosociales.", "Pruebas psicotécnicas laborales.", "Capacitación en salud mental laboral."],
  buttonText: "Contáctanos para saber más",
  buttonLink: "index.html"
});

loadComponent("#section-3", "components/section3.html", {
  image: "images/services/service-certified.webp",
  title: "Certificados especializados para el sector de seguridad",
  paragraph: "Realizamos evaluaciones completas para porte y tenencia de armas, con resultados confiables y entrega rápida.",
  paragraph2: "Entendemos las necesidades específicas del sector de la seguridad privada. Brindamos un servicio integral que cumple con todos los requisitos legales para la certificación del personal, garantizando procesos ágiles y resultados precisos.",
  buttonText: "Conoce nuestra IPS",
  buttonLink: "index.html"
});

loadComponent("#section-4", "components/section4.html", {
  image: "images/services/service-support-sg-sst.webp",
  title: "Asesoría e Implementación del Sistema de Gestión SG-SST",
  paragraph: "Identificamos y evaluamos los factores de riesgo críticos que pueden comprometer la seguridad operacional y el cumplimiento normativo. Ofrecemos soluciones preventivas adaptadas a las necesidades de tu sector.",
  buttonText: "Solicita una asesoría",
  buttonLink: "#contact-form"
});

loadComponent("#section-5", "components/section5.html", {
  image: "images/services/service-labor-exam.webp",
  title: "Exámenes Médicos de Ingreso Completos y Certificados",
  paragraph: "Brindamos atención médica especializada con resultados rápidos y confiables. Nuestros profesionales realizan evaluaciones integrales que cumplen con todas las normativas vigentes en salud ocupacional.",
  buttonText: "Conoce nuestra IPS",
  buttonLink: "ips.html"
});

loadComponent("#section-6", "components/section5.html", {
  image: "images/testimonials/mision.webp",
  title: "Nuestro Propósito",
  paragraph: "Ofrecemos productos y servicios diseñados para mejorar la calidad de vida de los colaboradores y sus familias.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "#contact-form"
});

loadComponent("#section-7", "components/section6.html", {
  image: "images/services/service-exequial.webp",
  title: "Acompañamos a tu equipo en los momentos difíciles con planes exequiales",
  paragraph: "Brinda a tu familia la tranquilidad que merece en los momentos más difíciles. Estaremos a tu lado cuando más lo necesites.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "index.html"
});

loadComponent("#section-8", "components/section6.html", {
  image: "images/services/service-dreams.webp",
  title: "Ayuda a tu equipo a cumplir sus sueños con nosotros",
  paragraph: "Ponemos a tu disposición un amplio portafolio de créditos para que tus colaboradores hagan realidad sus proyectos. Nosotros nos encargamos de todo.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "index.html"
});




