(function () {
    'use strict';
    let ul = document.querySelector('ul');
    let txtTask = document.querySelector('#txtTask');
    let btn = document.querySelector('#btn');

    btn.addEventListener('click', addTask);
    txtTask.addEventListener('keyup', (e) => {
        if (e.keyCode === 13)
            addTask();
    });

    ul.addEventListener('click', (e) => {
        if (e.target.nodeName === 'LI') 
            toggleDone(e.target);

        removeTask(e.target);
    });

    function removeTask(li) {
        if (confirm(`Deseja remover a tarefa ${li.textContent} ?`)) {
            li.parentNode.removeChild(li);
        }
    }

    function toggleDone(li) {
        li.classList.toggle('done');
    }

    function addTask() {
        let li = document.createElement('li');
        let text = document.createTextNode(txtTask.value);
        
        li.appendChild(text);
        ul.appendChild(li);
    
        limpaCampo();
    };

    function limpaCampo() {
        txtTask.value = "";
        txtTask.focus();
    };
})();