(function () {
    'use strict';

    var btns = document.getElementsByTagName('button');

    for (const iterator of btns) {
       iterator.addEventListener('click', clicou); 
    }

    function clicou() {
        console.log(this.textContent);
        
    }
})();