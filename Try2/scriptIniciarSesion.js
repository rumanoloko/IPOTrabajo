function verificarCredenciales() {
    var usuarioInput = document.getElementById('texto1').value;
    var contraseñaInput = document.getElementById('texto2').value;

    if (usuarioInput === 'petru' && contraseñaInput === 'petru') {
        reproducirSonidoConfirmacion(function() {
            window.location.href = 'indexCrearColaboracion.html';
        });
    } else {
        reproducirSonidoError();
        alert('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.');
    }
}

function reproducirSonidoError() {
    var audioError = new Audio('no-with-attitude-3-83643.mp3');

    audioError.play();
}

function reproducirSonidoConfirmacion(callback) {
    var audioConfirmacion = new Audio('level-passed-142971.mp3');

    audioConfirmacion.addEventListener('ended', function() {
        if (typeof callback === 'function') {
            callback();
        }
    });
    audioConfirmacion.play();
}
function irAPagina(url) {
    window.location.href = url;
}
