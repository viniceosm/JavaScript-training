(function () {
    'use strict';
    var paragrafos = document.querySelectorAll('p');
    var x = 0;
    while (paragrafos[x]) {
        paragrafos[x].textContent = 'Esse paragrafo foi alterado';
        x++;
    }
})();