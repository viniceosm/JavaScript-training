var $d1 = document.querySelector('#d1');
var $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function (e) {
    console.log('Clicou no $d1');
    e.stopPropagation();
}, false);

$d1Span.addEventListener('click', function () {
    console.log('Clicou no $d1Span'); 
}, false);

document.addEventListener('click', function (e) {
    console.log('Clicou no document');
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(this);
}, false);

// objeto evemt passado por parametro para funções fprce várias informações adicionais sobre o evento em si, varia de acordo com o tipo do evento.
