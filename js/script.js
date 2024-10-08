window.addEventListener("resize", anchoPagina);

function anchoPagina(){
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    if(window.innerWidth < 768){
        var Base = document.getElementById('Base');
        Base.setAttribute("style",`--alto:${altoVentana}px; --ancho:${anchoVentana}px;`);
    }
}
setTimeout(function(){
    const fondo = document.getElementById('fondo');
    const cart = document.getElementById('cart');
    const fondos_img = document.getElementById('fondos_img');
    const globos_cart = document.getElementById('globos_cart');
    fondo.classList.add('active');
    cart.classList.add('active');
    fondos_img.classList.add('active');
    globos_cart.classList.add('active');
    escribir();
},3500);
setTimeout(function(){
    const audio = document.getElementById('Musica');
    audio.volume = 0.5;
    audio.play();
},5000);
function escribir() {
    const container = document.getElementById("texto");
    const texto = container.innerHTML
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
                        setTimeout(typeChar, 20); // Ajusta la velocidad aquí (en milisegundos) 40
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
anchoPagina();