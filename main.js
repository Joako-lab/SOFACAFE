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


$(document).ready(function(){
$('.burger-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true, // Activa el centrado
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 300,
    responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
});

});