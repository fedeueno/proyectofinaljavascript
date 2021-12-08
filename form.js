function fuguCliente(nombre, mail, comentario) {
    this.nombre = nombre;
    this.mail = mail;
    this.comentario = comentario;
}

function cargarFuguCliente() {
    let nombre = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let comentario = document.getElementById("comentario").value;
    let cliente1 = new fuguCliente(nombre, mail, comentario);
    console.log(cliente1);
    mostrarFuguCliente(cliente1);
}

function mostrarFuguCliente(cliente) {
    let form = document.getElementById("formularioCliente");
    form.parentNode.removeChild(form);
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML =
        "Hola " +
        "" +
        "" +
        cliente.nombre +
        "!!" +
        " Gracias por darnos tu Fugu Comentario ";
    nuevoContenido.className = "fugu-cliente";
    document.body.appendChild(nuevoContenido);

    nuevoContenido.addEventListener("click", respuestaClick)
        function respuestaClick(){
            nuevoContenido.parentNode.removeChild(nuevoContenido);
        }
}