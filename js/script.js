window.addEventListener("resize", anchoPagina);

function anchoPagina(){
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    if(window.innerWidth < 768){
        var fondo = document.getElementById('fondo');
        var container = document.getElementById('container');
        var cart = document.getElementById('cart');
        restaAncho = anchoVentana;
        restaAlto = altoVentana;
        fondo.setAttribute("style",`--alto:${altoVentana}px; --ancho:${anchoVentana}px;`);
        container.setAttribute("style",`--alto:${restaAlto}px; --ancho:${restaAncho}px;`);
        cart.setAttribute("style",`--alto:${restaAlto-60}px; --ancho:${restaAncho-60}px;`);
    }
    else{
        var pastel = document.getElementById('pastel');
        pastel.setAttribute("style",`--alto:${altoVentana}px; --ancho:${anchoVentana}px;`);
    }
}

function ocultar() {
    var container = document.getElementById('container');
    var cart = document.getElementById('cart');
    var texto = document.getElementById('texto');
    var fondo = document.getElementById('fondo');
    container.style.display = "none";
    cart.style.display = "flex";
    fondo.classList.add('active');
    var text = texto.innerHTML;
    escribir(text);
}

function escribir(texto) {
    const container = document.getElementById("texto");
    var audio = document.getElementById('Musica');
    container.innerHTML = "";
    let index = 0;
    const regex = /(<[^>]+>|[^<]+)/g;
    const segments = texto.match(regex);

    function typeSegment(segmentIndex) {
        if (segmentIndex < segments.length) {
            let segment = segments[segmentIndex];
            if (segment.startsWith("<")) {
                // Insertar etiqueta HTML como tal
                container.innerHTML += segment;
            } else {
                // Insertar texto carácter por carácter
                let charIndex = 0;
                function typeChar() {
                    if (charIndex < segment.length) {
                        container.innerHTML += segment.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, 20); // Ajusta la velocidad aquí (en milisegundos)
                    } else {
                        typeSegment(segmentIndex + 1);
                    }
                }
                typeChar();
                return; // Salir de typeSegment para esperar que typeChar termine
            }
            typeSegment(segmentIndex + 1);
        }else
        {
            document.getElementById('pastel').style.display = 'flex';
            document.getElementById('Belas').style.display = 'flex';
            audio.volume = 0.5;
            audio.play();
        }
    }
    typeSegment(0);
}
anchoPagina();