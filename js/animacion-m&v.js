document.addEventListener("DOMContentLoaded", function() {
    // Animar elementos al aparecer en la pantalla
    var animatedContainers = document.querySelectorAll(".cont-animado");
    animatedContainers.forEach(function(container) {
        container.classList.add("mostrar-cont");
    });
});