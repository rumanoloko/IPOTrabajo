function viajar(url) {
    var audioConfirmacion = new Audio('level-passed-142971.mp3');
    audioConfirmacion.play();
    setTimeout(function() {
        window.location.href = 'indexChat.html';
    }, 1000);
}