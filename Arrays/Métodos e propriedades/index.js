/*
    Métodos e propriedades
        Length
        every()
        filter()
        forEach()
        indexOf()
        lastIndexOf()
        map()
        some()
        concat()
        join()
        pop()
        push()
        reduce()
        reduceRight()
        reverse()
        shift()
        slice()
        splice()
        unshift()
        toString()
*/

var arr =['11',20,33,44,55, 'kjkl', 20, "50"];



// Length retorna quantos index tem o array;
console.log("Quantidade de index no array: ", arr.length); 



// Every retorna true se passar por uma validação, precisa que todos seja true
var soNumeros = arr.every( function (el, indice, objeto) {
//    console.log("Elemento: ", el);
//    console.log("Indice: ", indice);
//    console.log("Objeto: ", objeto);

   return typeof el === 'number';
});
console.log('Every: ', soNumeros);



// Some retorna se tiver apenas um valor true, retorna true;
var aoMenosUmNumero = arr.some(function (el) { 
    return typeof el === 'number';
});
console.log('Some: ', aoMenosUmNumero);



// Filter retorna um novo array conforme a validação, nesse caso somente numeros
var numeros = arr.filter(function (el, i, arr) {
   return typeof el === 'number'; 
});
console.log(numeros);



// ForEach função é não utilizar while e for.
arr.forEach(function (el, i, arr) { 
    console.log('Elemento: ', el, ' Index: ', i, ' arr: ', arr.toString());
});



// indexOf pega a posição do valor informado
var posicaoStr1 = arr.indexOf('kjkl');
console.log("posicaoStr1", posicaoStr1);
// Pasando o inicio pro indexOf iniciar a busca pelo elemento.
var posicaoStr2 = arr.indexOf('kjkl', 9);
console.log("posicaoStr2", posicaoStr2);



// lastIndexOf pega a posição do valor informado começando de tras pra frente
var posicaoStr3 = arr.lastIndexOf(20);
console.log("posicaoStr3", posicaoStr3);



// Map realiza alterações em valores
mapa = numeros.map(function (el, index, arr) {
    return el * index;
});
console.log('Map: ', mapa);



// Concat ajunta arr
var arr2 = arr.concat(numeros);
console.log('Concat 1: ', arr2);

// Pasando valores alem do arry no concat
var arr3 = arr.concat(numeros, 664, 323223);
console.log('Concat 2: ', arr3);



// Join transformar array numa string
var str1 = arr2.join();
console.log('Join 1: ', str1);

// Join recebendo caracter separador
var str2 = arr2.join(' -- '); 
console.log('Join 2: ', str2);



// Push adiciona novos elementos ao final do array
arr.push('novo item');
console.log('Push:', arr);



// Pop remove o ultimo item e devolve pra quem chamou
var ultimoItem = arr.pop();
console.log('pop: ', ultimoItem);



// Shift remove o primeiro item e devolve pra quem chamou
var primeiroItem = arr.shift();
console.log('Shift: ', primeiroItem);



// unShift adiciona um novo elemento no inicio do array
arr.unshift('true', false, 'unshift')
console.log(arr);