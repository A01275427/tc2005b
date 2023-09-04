function validarContrasena() {
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    const mensajeDiv = document.getElementById('mensaje');

    if (contrasena === confirmarContrasena && contrasena.length >= 8) {
        mensajeDiv.innerHTML = 'Contraseña válida';
        mensajeDiv.style.color = 'green';
    } else {
        mensajeDiv.innerHTML = 'Las contraseñas no coinciden o no cumplen con los requisitos (mínimo 8 caracteres)';
        mensajeDiv.style.color = 'red';
    }
}

document.getElementById('contrasena').addEventListener('input', validarContrasena);
document.getElementById('confirmarContrasena').addEventListener('input', validarContrasena);
