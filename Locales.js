// Navbar hamburguesa responsive
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('navbar-toggle');
    const links = document.querySelector('.navbar-links');
    if (toggle && links) {
        toggle.onclick = function() {
            links.classList.toggle('active');
        };
    }
});

// Slider funcionalidad
const slider = document.getElementById('locales-slider');
const slides = slider.querySelectorAll('.slide-collage');
const leftBtn = document.querySelector('.slider-arrow.left');
const rightBtn = document.querySelector('.slider-arrow.right');
let current = 0;

function showSlide(idx) {
    slider.style.transform = `translateX(-${idx * 100}%)`;
}
leftBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});
rightBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

// Soporte táctil para móvil
let startX = 0;
slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});
slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) leftBtn.click();
    if (startX - endX > 50) rightBtn.click();
});