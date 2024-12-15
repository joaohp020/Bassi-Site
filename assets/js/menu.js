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


// Seleciona o header
const header = document.querySelector("header");

// Adiciona um evento ao scroll da página
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
