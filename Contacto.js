// Validación y feedback del formulario de contacto Sofá Café

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactoForm');
    const exito = document.getElementById('contacto-exito');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí podrías enviar los datos a un backend o servicio externo
            form.style.display = 'none';
            exito.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
