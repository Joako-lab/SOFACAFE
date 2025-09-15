document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const local = document.getElementById('local').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Construir el cuerpo del correo
    const body = `
        Local: ${local}
        Nombre: ${nombre}
        Teléfono: ${telefono}
        Cantidad de personas: ${cantidad}
        Fecha: ${fecha}
        Hora: ${hora}
    `;

    // Codificar el cuerpo del correo para la URL
    const encodedBody = encodeURIComponent(body);

    // Crear el enlace mailto
    const mailtoLink = `mailto:Joaquin.lrc.09@gmail.com?subject=Nueva Reserva&body=${encodedBody}`;

    // Redirigir al enlace mailto
    window.location.href = mailtoLink;
});