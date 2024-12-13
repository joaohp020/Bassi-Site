// Seleciona os botões de abrir e fechar
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

// Evento para abrir o menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});

// Evento para fechar o menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});
