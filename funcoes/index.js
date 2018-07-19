// Função literal
function somar(n1, n2) {
    return n1 + n2;
};

let soma = somar(10, 20);
console.log('Resultado: ', soma);

// Atribuindo uma propriedade a uma função
somar.teste = 'propriedade da função';
console.log(somar.teste);

// Criando função anonima
let teste = function (str) {
    console.log('teste', str);
};

teste('ola');

// Função sendo passada como parâmetro
let funcao = function (f) {
    f();
};

funcao(function () {
    console.log('Função passada por parâmetro');
});

console.log('-------------------');

var x = 0;
var y;

function mostraX() {
    var x = 10; // escopo local
    var  y = 20; // escopo local
    k = 15; // se tornando global
    console.log('Mostra x dentro: ', x);
    console.log('Mostra y dentro: ', y);
    console.log('Mostra k dentro: ', k);
};

mostraX();

console.log('Mostra x fora: ', x);
console.log('Mostra y fora: ', y);
console.log('Mostra k fora: ', k);

console.log('-------------------');

// IIFE - Função auto-invocável
(function () {
    'use strict';
    // isValid = false;

    function somar() {
        console.log(arguments);
        var result = 0;
        var x =0;

        while(arguments[x]){
            result +=arguments[x];
            x++;
        }
        console.log('Result: ', result);
    }

    somar(20, 20, 10, 30);
})();
