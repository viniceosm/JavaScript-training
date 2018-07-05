// DOM LEVEL 0

var btn2 = document.getElementById('btn2');

// Dom level 0 sempre usa on no inicio do evento
btn2.onclick = clicar();

function clicar() {
    alert('Clicou 1');

    return function() {
        alert('Clicou 2');
    }
}