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

for (let index = 1; index <= 3; index++) {
    console.log(`${window["pessoa"+index].nome} ${window["pessoa"+index].sobrenome}`);
}

