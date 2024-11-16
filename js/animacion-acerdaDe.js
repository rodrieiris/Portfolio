// Función que se ejecutará cuando el observador detecte que la sección está en vista
function activarAnimaciones(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar la clase que activa la animación cuando la sección entra en vista
            const cabecera = entry.target.querySelector('.cabecera');
            const parrafoIzq = entry.target.querySelector('.parrafo-izq');
            const parrafoDch = entry.target.querySelector('.parrafo-dch');
            
            // Primero, eliminamos las clases de animación para reiniciar el ciclo
            cabecera.classList.remove('animado');
            parrafoIzq.classList.remove('animado');
            parrafoDch.classList.remove('animado');
            
            // Forzamos la reflow para reiniciar la animación
            void cabecera.offsetWidth; // Forzar reflow
            void parrafoIzq.offsetWidth; // Forzar reflow
            void parrafoDch.offsetWidth; // Forzar reflow

            // Luego, volvemos a agregar las clases de animación
            cabecera.classList.add('animado');
            parrafoIzq.classList.add('animado');
            parrafoDch.classList.add('animado');
        }
    });
}

// Crear el Intersection Observer
const observer = new IntersectionObserver(activarAnimaciones, {
    threshold: 0.2  // Cuando el 20% de la sección es visible
});

// Observar la sección "Acerca de"
const acercaDeSection = document.getElementById('acerca-de');
observer.observe(acercaDeSection);