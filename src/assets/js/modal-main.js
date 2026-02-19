// assets/js/pages/modal-promo.js

// 1. Detectar si estamos en el Home
const path = window.location.pathname;
const isHome = path.toLowerCase().endsWith("index.html") || path === "/" || path.endsWith("/");

if (isHome) {
  fetch("./components/modal-main.html")
    .then(res => {
      if (!res.ok) throw new Error(`❌ No encontré el archivo HTML. Status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
      initPromoEvents();
    })
    .catch(err => console.error(err));
}

function initPromoEvents() {
  const modal = document.getElementById("promoModal");
  const closeBtn = document.getElementById("closePromoBtn");

  if (!modal || !closeBtn) return;

  const openModal = () => {
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // --- AQUÍ ESTÁ EL CAMBIO ---
  // En lugar de llamar a openModal() directamente, usamos setTimeout
  setTimeout(() => {
    openModal();
  }, 2000); // 2000 milisegundos = 2 segundos
}