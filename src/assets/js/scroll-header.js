export function setupScrollHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll hacia abajo
      header.classList.add("header--hidden");
    } else {
      // Scroll hacia arriba
      header.classList.remove("header--hidden");
    }

    lastScrollY = currentScrollY;
  });
}

