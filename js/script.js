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
                        setTimeout(typeChar, 5); // Ajusta la velocidad aquí (en milisegundos)
                    } else {
                        typeSegment(segmentIndex + 1);
                    }
                }
                typeChar();
                return; // Salir de typeSegment para esperar que typeChar termine
            }
            typeSegment(segmentIndex + 1);
        }
    }
    typeSegment(0);
}