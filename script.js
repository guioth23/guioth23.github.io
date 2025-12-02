// Menú lateral principal
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const menu = document.getElementById("menu");

  if (toggleBtn && menu) {
    // Alternar la clase 'closed' (coincide con el CSS)
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("closed");
    });
  }

  // Submenús desplegables
  const submenuBtns = document.querySelectorAll(".submenu-btn");
  submenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      if (!submenu) return;
      submenu.classList.toggle("open");

      // Rotar flecha ▼/▲ sin romper texto adicional
      if (btn.textContent.includes("▼")) {
        btn.textContent = btn.textContent.replace("▼", "▲");
      } else if (btn.textContent.includes("▲")) {
        btn.textContent = btn.textContent.replace("▲", "▼");
      }
    });
  });
});