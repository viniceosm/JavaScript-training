var Caneta = (function (window) {
    'use strict';
    function _caneta(preco, cor) {
        var color =  cor || 'black';
        this.preco = preco || 1;
        this.mudarCor = function (cor) {
            color = cor;
        };  
        this.pegaCor = function(){
            return color;
        }
    }

    return _caneta;
})(window)