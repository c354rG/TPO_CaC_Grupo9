const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    const imagen = document.getElementById('imagen').files[0];
    const terminos = document.getElementById('terminos').checked;

    let errores = false;
})