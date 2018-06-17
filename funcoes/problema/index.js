(function () {
    'use strict';
    function calcularMedia() {
        var total = 0;
        var qtd = arguments.length;
        var x = 0;
        
        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++;
        }
        return total / qtd;
    }
    
    var mediaUm = calcularMedia(2, 3);
    var mediaDois = calcularMedia(4, 0, 10, 10);

    console.log("Media um: ", mediaUm);
    console.log("Media Dois: ", mediaDois);
})();