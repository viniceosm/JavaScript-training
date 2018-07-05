// DOM LEVEL 0 VS DOM LEVEL 2

// DOM LEVEL 0
var btn2 = document.getElementById('btn2');
btn2.onclick = clicar;

function clicar() {
    alert('Clicou 1');

    return function() {
        alert('Clicou 2');
    }
}

// DOM LEVEL 2
var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', alert('Clicou com DOM LEVEL 2'));