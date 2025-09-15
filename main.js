// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('navbar-toggle');
    const links = document.querySelector('.navbar-links');
    if (toggle && links) {
        toggle.onclick = function() {
            links.classList.toggle('active');
        };
    }
});

// Ocultar/mostrar navbar al hacer scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll hacia abajo: ocultar navbar
        navbar.style.transform = 'translateY(-110%)';
        navbar.style.transition = 'transform 0.3s';
    } else {
        // Scroll hacia arriba: mostrar navbar
        navbar.style.transform = 'translateY(0)';
        navbar.style.transition = 'transform 0.3s';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});