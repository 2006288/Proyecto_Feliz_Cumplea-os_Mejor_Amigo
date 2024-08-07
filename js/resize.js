window.addEventListener("resize", anchoPagina);
function anchoPagina(){
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    if(window.innerWidth < 768){
        console.log("hola");
        var fondo = document.getElementById('fondo');
        var container = document.getElementById('container');
        resta = anchoVentana - 40;
        fondo.setAttribute("style",`--alto:${altoVentana}px; --ancho:${anchoVentana}px;`);
        container.setAttribute("style",`--alto:${altoVentana-20}px; --ancho:${resta}px;`);
    }
}
anchoPagina();