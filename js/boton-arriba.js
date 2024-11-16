// Obtener elementos
const botonArriba = document.getElementById("boton-arriba");
const footer = document.querySelector("footer");

// Mostrar u ocultar el botón según el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // Mostrar después de 200px
        botonArriba.classList.add("mostrar");
    } else {
        botonArriba.classList.remove("mostrar");
    }

    // Detectar si el botón se solapa con el footer
    const footerRect = footer.getBoundingClientRect();
    const botonRect = botonArriba.getBoundingClientRect();

    if (footerRect.top < window.innerHeight) {
        botonArriba.classList.add("en-footer");
    } else {
        botonArriba.classList.remove("en-footer");
    }
});

// Volver al inicio cuando se hace clic
botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});