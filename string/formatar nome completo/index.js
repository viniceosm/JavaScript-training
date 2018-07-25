var nome = "Christopher Dopona Lopes";

var nomeFormatado = formatarNome(nome);

function formatarNome(nome) {
    var posicaoUltimoEspaco = nome.lastIndexOf(' ');
    if (posicaoUltimoEspaco <= 0) {
        return nome;
    }

    var ultimoNome = nome.slice(posicaoUltimoEspaco + 1);
    var primeiroNome = nome.slice(0, posicaoUltimoEspaco);

    return `${ultimoNome}, ${primeiroNome}`
    
}

console.log(nomeFormatado);
