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