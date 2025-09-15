document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const local = document.getElementById('local').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Aquí debes enviar los datos al backend (Node.js, PHP, etc.)
    // Puedes usar fetch() o XMLHttpRequest para hacer la petición

    console.log('Datos de la reserva:', { local, nombre, telefono, cantidad, fecha, hora });

    // Ejemplo de cómo podrías enviar los datos con fetch():
    fetch('/reservar', { // Reemplaza '/reservar' con la ruta de tu backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ local, nombre, telefono, cantidad, fecha, hora })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('¡Reserva enviada con éxito!'); // Muestra un mensaje de éxito
    })
    .catch(error => {
        console.error('Error al enviar la reserva:', error);
        alert('Error al enviar la reserva. Inténtalo de nuevo.'); // Muestra un mensaje de error
    });
});