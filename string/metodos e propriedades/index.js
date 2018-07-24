// Literais
var meuTexto = "Olá Mundo!";
var teste = "Minha string linda";

// Objetos
var meuTexto = new String("Olá Mundo!");

/*
Métodos e propriedades:
    length
    replace()
    indexOf()
    lastIndexOf()
    slice()
    substring()
    split()
    toLowerCase()
    toUpperCase()
    valueOf()
*/ 

console.log(teste);

// Length mostra a quantidade de caracteres da variavel.
console.log(teste.length);

// Replace altera um valor para outro
console.log(teste.replace('i', 'I'));

// Replace altera todos os valor para outro, com expressão regular.
console.log(teste.replace(/i/g, 'I'));

// indexOf retorna a posição do caracter.
console.log(teste.indexOf(' '));

// lastIndexOf retorna a ultima posição do caracter.
console.log(teste.lastIndexOf(' '));

// slice cortar string.
console.log(teste.slice(5));
console.log(teste.slice(5, 10));

// Substring.
console.log(teste.substring(10, 5));

// split retorna um array, quebrando a string.
console.log(teste.split(' '));

// toLowerCase retorna tudo minusculo.
console.log(teste.toLowerCase());

// toUpperCase retorna tudo maiusculo.
console.log(teste.toUpperCase());

//valueOf retorna valor premitivo
console.log(teste.valueOf());