var $d1 = document.querySelector('#d1');
var $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', () => console.log('Clicou no $d1'), true);

$d1Span.addEventListener('click', () => console.log('Clicou no $d1Span'), true);

document.addEventListener('click', () => console.log('Clicou no document'), true);

// true no final indica a mudança da ordem da captura do evento
// propagação vai do maior pro menor, desde o elemento original até o nivel mais alto