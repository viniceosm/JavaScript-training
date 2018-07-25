/*
    Métodos e propriedades:
        MAX_VALUE
        MIN_VALUE
        toFixed()
        toPrecision()
        toString()
        toExponential()
*/

var n = new Number('10');
console.log(n);
console.log(Number.MAX_VALUE); // VALOR MAXIMO QUE O JS SUPORTA
console.log(Number.MIN_VALUE); // VALOR MINIMO QUE O JS SUPORTA

n = 12345.6789;
console.log(n);
console.log(n.toFixed(2)); // RETORNA SOMENTE DUAS CASAS DECIMAIS
console.log(n.toFixed(10)); // QUANDO NÃO ENCONTRAR ADICIONA 0 ATÉ FECHAR 10
console.log(n.toPrecision(5)); // DIZ QUANTOS DIGITOS TEM NO TOTAL

n = 12.345
console.log(n.toPrecision(2));
console.log(n.toString()); // TRANSFORMA EM STRING
console.log(n.toExponential()); // RETORNA NOTAÇÃO CIENTIFICA DE UM NUMERO


var str = new String('teste');
console.log(str);

