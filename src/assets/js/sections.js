async function loadComponent (selector, componentPath, data = {}) {
  const container = document.querySelector(selector);
  if(!container) return;

  //Fetch the HTML component
  const response = await fetch(componentPath);
  const html = await response.text();

  //Insert the component into the page
  container.innerHTML = html;

  //Populate dynamic content
  container.querySelector(".section-image").src = data.image || "/assets/images/company-logo.png";
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




loadComponent("#section-1", "/components/sections.html", {
  image: "images/services/service-optometria-test.png",
  title: "Optometria laboral",
  paragraph: "Ofrecemos evaluaciones precisas y certificadas permitiéndole a su empresa tomar decisiones informadas y garantizar un entorno laboral seguro.",
  list: ["Evaluación completa de la agudeza visual lejana y cercana", "Pruebas de profundidad visual y discriminación de colores", "Recomendaciones específicas según el puesto de trabajo", "Prevención de riesgos visuales ocupacionales"],
  buttonText: "Contáctanos para saber más",
  buttonLink: "#contact-form"
});


loadComponent("#section-2", "/components/section2.html", {
  image: "/images/services/service-psicology.png",
  title: "Psicología Laboral",
  paragraph: "Evaluamos los factores psicosociales que impactan en el desempeño y bienestar de sus colaboradores, identificando fortalezas y áreas de mejora para optimizar el ambiente laboral.",
  list: ["Evaluación de Riesgos Bio-Psicosociales", "Pruebas Psicotécnicas Laborales", "Capacitación en Salud Mental Laboral", "Control de Sustancias psicoactivas y Alcoholimetría."],
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});

loadComponent("#section-3", "/components/section3.html", {
  image: "/images/services/service-certified.png",
  title: "Certificados especializados para seguridad.",
  paragraph: "Evaluaciones completas para porte y tenencia de armas con resultados confiables y rápidos.",
  paragraph2: "Entendemos las necesidades específicas del sector de seguridad privada. Ofrecemos un servicio integral que cumple con todos los requisitos legales para la certificación de su personal, garantizando procesos ágiles y resultados precisos.",
  buttonText: "Conoce nuestra IPS",
  buttonLink: "/index.html"
});

loadComponent("#section-4", "/components/section4.html", {
  image: "/images/services/service-support-sg-sst.png",
  title: "Asesoría e Implementación de Sistemas de Gestión SG-SST",
  paragraph: "Detectamos y evaluamos factores de riesgo críticos que pueden comprometer la seguridad operacional y el cumplimiento normativo, ofreciendo soluciones preventivas adaptadas a su sector.",
  buttonText: "Solicita una asesoria",
  buttonLink: "#contact-form"
});

loadComponent("#section-5", "/components/section5.html", {
  image: "/images/services/service-labor-exam.jpg",
  title: "Exámenes Médicos de Ingreso Completos y Certificados",
  paragraph: "Ofrecemos atención médica especializada con resultados rápidos y confiables.Nuestros profesionales realizan evaluaciones integrales que cumplen todas las normativas vigentes en salud ocupacional.",
  buttonText: "Conoce nuestra IPS",
  buttonLink: "./ips.html"
});

loadComponent("#section-6", "/components/section5.html", {
  image: "/images/testimonials/mision.png",
  title: "Nuestra Propósito",
  paragraph: "Ofrecemos productos y servicios que mejoran la calidad de vida de los colaboradores y sus familias.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "#contact-form"
});

loadComponent("#section-7", "/components/section6.html", {
  image: "/images/services/service-exequial.png",
  title: "Acompañamos a tu equipo en los momentos dificiles con planes exequiales",
  paragraph: "Brinda tranquilidad total a tu familia en los momentos más difíciles. Te acompañamos en los momentos más dificiles.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});

loadComponent("#section-8", "/components/section6.html", {
  image: "/images/services/service-dreams.png",
  title: "Ayuda a tu equipo a cumplir sus sueños con nosotros",
  paragraph: "Ofrecemos un gran portafolio de créditos para que tus empleados puedan cumplir sus proyectos. Nosotros nos encargamos de todo.",
  buttonText: "Contáctanos para saber más",
  buttonLink: "/index.html"
});




