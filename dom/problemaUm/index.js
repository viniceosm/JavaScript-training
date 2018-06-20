(function () {
    var nome = prompt('Qual seu nome?');
    // Propriedade textContent somente texto
    document.querySelector('#msg').innerHTML = `Bem-vindo, <b>${nome}</b>`;
})();