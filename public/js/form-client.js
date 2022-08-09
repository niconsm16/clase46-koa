//# Form

// FUNCIONES

let ingresarBtn = document.getElementById('ingresar')
let modificarBtn = document.getElementById('modificar')

// Cambio de menú

ingresarBtn.onclick = () => ingresar()
modificarBtn.onclick = () => modificar()

function ingresar() {
    location.href = '/productos-form?mode=ingresar'
}
function modificar() {
    location.href = '/productos-form?mode=modificar'
}




