// Propriedade textContent somente texto
function escreve() {   
    var txtNome = document.querySelector('#txtNome');
    document.querySelector('#msg').innerHTML = `Bem-vindo, <b>${txtNome.value}</b>`;   
}