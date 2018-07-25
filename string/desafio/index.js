function init() {
    var paragrafos = document.querySelectorAll('p');
    for (const iterator of paragrafos) {
        iterator.innerHTML = formatarTexto(iterator.innerHTML);
    }
}

function formatarTexto(texto) {
    var numeroMaximoCaracteres = 510;
    if (texto.length <= numeroMaximoCaracteres) 
        return texto;
    
    var subTexto = texto.slice(0, numeroMaximoCaracteres);
    return `${subTexto}...`;
        
}

init();