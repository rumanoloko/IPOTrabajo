function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje");
    mensaje.classList.remove("oculto");
    setTimeout(function() {
        mensaje.classList.add("oculto");
    }, 3000); // Ocultar el mensaje después de 3 segundos
}