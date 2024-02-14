function mostrarContenido(event, elemento, opcion) {
    event.preventDefault();
    resetearEstilos();
    elemento.classList.add("clicked");

    ocultarTodasSubopciones();

    var opcionPrincipal = document.getElementById("opcion" + opcion);
    if (opcionPrincipal) {
        opcionPrincipal.classList.add("clicked");
    }

    var subopciones = document.getElementById("sub" + opcion);
    if (subopciones) {
        subopciones.classList.add("visible");
    }
}

function resetearEstilos() {
    var opciones = document.querySelectorAll('.menu-link, .sub-menu-link');
    opciones.forEach(function(opcion) {
        opcion.classList.remove('clicked');
    });

    ocultarTodasSubopciones();
}

function ocultarTodasSubopciones() {
    var subopciones = document.querySelectorAll('.subapartados');
    subopciones.forEach(function(subopcion) {
        subopcion.classList.remove('visible');
    });
}
function mostrarContenido(event, elemento, opcion) {
    event.preventDefault();

    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function (link) {
        link.classList.remove('clicked');
    });

    elemento.classList.add('clicked');

    redirigirAVentana(opcion);
}

function redirigirAVentana(opcion) {
    var url;

    switch (opcion) {
        case 'Inicio':
            url = 'Inicio.html';
            break;
        case 'Colaboraciones':
            url = 'Activas.html';
            break;
        case 'Activas':
            url = 'Activas.html';
            break;
        case 'Crear':
            url = 'Crear.html';
            break;
        case 'Finalizadas':
            url = 'Finalizadas.html';
            break;
        case 'Foros':
            url = 'IndexAllForos.html';
            break;
        case 'MisForos':
            url = 'MisForos.html';
            break;
        case 'TodosForos':
            url = 'TodosForos.html';
            break;
        case 'Ajustes':
            url = 'Ajustes.html';
            break;
        case 'Sistema':
            url = 'Sistema.html';
            break;
        case 'Reportar':
            url = 'Reportar.html';
            break;
        case 'Perfil':
            url = 'Perfil.html';
            break;
        case 'Ingles':
            break;
        }
        if (url) {
        window.location.href = url;
    }
}
