(function () {
    'use strict';
    var $txtMsg = document.getElementById('msg');
    var $restaContainer = document.getElementById('restaContainer');
    var $resta = document.getElementById('resta');
    var maxima = $txtMsg.maxLength;
    
    mostrarContainerResta();

    $txtMsg.addEventListener('input', verificaQuantidade);

    function verificaQuantidade(e) {
        var numeroCaracteres = this.value.length;
        mostrarCaracteresFaltantes(parseInt(maxima) - parseInt(numeroCaracteres));
    };

    function mostrarCaracteresFaltantes(n) {
        $resta.textContent = n;
    }

    mostrarCaracteresFaltantes(maxima);
    
    function mostrarContainerResta() {
        $restaContainer.style.display = "block";
    }

    /*
        $txtMsg.addEventListener('keypress', keypress);
        $txtMsg.addEventListener('keyup', keyup);
        $txtMsg.addEventListener('keydown', keydown);

        function keypress(e) {
            console.log('keypress: ', this.value);
        }

        function keyup(e) {
            console.log('keyup: ', this.value);
        }

        function keydown(e) {
            console.log('keydown: ', this.value);
        }
    */

})();