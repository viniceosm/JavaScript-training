var pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'Tapias Morales'
};

var pessoa2 = {
    nome: 'José',
    sobrenome: 'Geraldo'
};

var pessoa3 = {
    nome: 'Maria',
    sobrenome: 'Oliveira'
};

var pessoa = [
    pessoa1,
    pessoa2,
    pessoa3
]

var x = 0;

while(pessoa[x]) {
    console.log(`${pessoa[x].nome} ${pessoa[x].sobrenome}`);
    x++;
}