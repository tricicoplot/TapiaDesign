document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const errorFeedback = document.getElementById('errorFeedback');
    const successFeedback = document.getElementById('successFeedback');

    form.addEventListener('submit', (event) => {
        // Detenemos el envío automático para validar primero
        event.preventDefault();

        // Limpiamos alertas previas de la pantalla
        errorFeedback.hidden = true;
        errorFeedback.textContent = '';
        successFeedback.hidden = true;

        // Capturamos los valores de los campos limpiando espacios vacíos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // 1. Validar que no existan campos vacíos
        if (!nombre || !email || !mensaje) {
            errorFeedback.textContent = 'Por favor, completa todos los campos del formulario.';
            errorFeedback.hidden = false;
            return;
        }

        // 2. Validar formato de correo electrónico con una expresión regular básica
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorFeedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
            errorFeedback.hidden = false;
            return;
        }

        // Si todo está correcto, mostramos éxito y limpiamos el formulario
        successFeedback.hidden = false;
        form.reset();
    });
});