function Caneta(preco, cor) {

    var color =  cor || 'black';
    this.preco = preco || 1;
    this.mudarCor = function (cor) {
        color = cor;
    };  

    this.pegaCor = function(){
        return color;
    }
}

var caneta1 = new Caneta(200, 'blue');