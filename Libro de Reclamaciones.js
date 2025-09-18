// Validación y feedback del formulario de reclamos Sofá Café

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reclamosForm');
    const exito = document.getElementById('reclamos-exito');

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
