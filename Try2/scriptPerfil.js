function mostrarMenu() {
    var opcion = prompt("¿En qué puedo ayudarle?\n1. Ver colaboracionesActivas\n2. Crear colaboración\n3. Ver foros favoritos\n4. Modificar sistema");
    if (opcion === null || opcion === "") {
        reiniciarTemporizador();
    } else {
        if(opcion === "1"){
            window.location.href="indexListaColaboraciones.html";
        }else if(opcion === "2"){
            window.location.href="indexCrearColaboracion.html";
        }else if(opcion === "3"){
            window.location.href="indexMisForos.html";
        }else if(location === "4"){
            window.location.href="Ajustes.html";
        }else{
            reproducirAudio();
            alert("Ninguna opcion seleccionada es valida");
            mostrarMenu();
        }
    }
}
function reproducirAudio() {
    var audioConfirmacion = new Audio('correct-156911.mp3');
    audioConfirmacion.play();
}

reproducirAudio();

var temporizadorInactividad;

function reiniciarTemporizador() {
    clearTimeout(temporizadorInactividad);
    temporizadorInactividad = setTimeout(mostrarMenu, 5000); // 5 segundos
}

document.addEventListener('mousemove', reiniciarTemporizador);

reiniciarTemporizador();
