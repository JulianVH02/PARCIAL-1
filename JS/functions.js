// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombres = document.getElementById('nombres').value.trim();
            const apellidos = document.getElementById('apellidos').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const estrato = document.getElementById('estrato').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const grupoSanguineo = document.getElementById('grupoSanguineo').value;
            const genero = document.querySelector('input[name="genero"]:checked');
            const actividades = document.querySelectorAll('input[name="actividades"]:checked');

            const nombreRegex = /^[A-Za-z\s]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonoRegex = /^\d{10}$/;

            if (!nombreRegex.test(nombres)) {
                alert("Ingrese un nombre válido (solo letras y espacios).");
                return;
            }
            if (!nombreRegex.test(apellidos)) {
                alert("Ingrese un apellido válido (solo letras y espacios).");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("Ingrese un correo electrónico válido.");
                return;
            }
            if (!telefonoRegex.test(telefono)) {
                alert("Ingrese un teléfono válido (10 dígitos).");
                return;
            }
            if (estrato < 1 || estrato > 6) {
                alert("El estrato debe estar entre 1 y 6.");
                return;
            }
            if (!fechaNacimiento) {
                alert("Seleccione una fecha de nacimiento.");
                return;
            }
            if (!grupoSanguineo) {
                alert("Seleccione un grupo sanguíneo.");
                return;
            }
            if (!genero) {
                alert("Seleccione un género.");
                return;
            }
            if (actividades.length === 0) {
                alert("Seleccione al menos una actividad favorita.");
                return;
            }

            alert("¡Registro exitoso!");
            form.reset();
        });
    }
});

function validarFormulario(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();
    if (usuario === "" || clave === "") {
        alert("Por favor, complete ambos campos.");
        return false;
    }
    alert("¡Validación exitosa!");
    return true;
}

function signup() {
    alert("Redirigiendo a registro...");
    window.location.href = "signup.html";
}

function cancelar() {
    document.getElementById('loginForm').reset();
    window.location.href = "index.html";
}
var search = document.getElementById("search").value;
function search() {
            alert("Tu información digitada fue: " + search);
}