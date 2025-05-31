document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores
    const usuario = document.getElementById('usuarioRegistro').value;

    // Guardar datos
    localStorage.setItem('usuario', usuario);

    // Ocultar el formulario
    document.getElementById('registroForm').style.display = 'none';

    // Mostrar mensaje de bienvenida
    const mensaje = document.createElement('div');
    mensaje.className = 'mt-3 alert alert-success text-center';
    mensaje.innerHTML = `¡Bienvenido, <strong>${usuario}</strong>!`;
    
    
    document.querySelector('section').appendChild(mensaje);
});



