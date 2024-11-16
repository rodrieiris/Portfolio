document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav .menu");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function() {
            console.log("Botón de menú clicado");
            menu.classList.toggle("show"); // Alterna la clase 'show'
        });
    }
});