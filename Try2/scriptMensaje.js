function mostrarMensajeAyuda() {
    alert("¿Puedo ayudarle?");
}

var temporizadorInactividad;

function reiniciarTemporizador() {
    clearTimeout(temporizadorInactividad);
    temporizadorInactividad = setTimeout(mostrarMensajeAyuda, 15000); // 15 segundos
}

window.addEventListener('load', function() {
    document.body.addEventListener('click', reiniciarTemporizador);
    document.body.addEventListener('keydown', reiniciarTemporizador);
});
