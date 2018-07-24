(function () {
    'use strict';
    let ul = document.querySelector('ul');
    let lis = ul.querySelectorAll('li');
    let txtTask = document.querySelector('#txtTask');
    let btn = document.querySelector('#btn');

    btn.addEventListener('click', addTask);
    txtTask.addEventListener('keyup', (e) => {
        if (e.keyCode === 13)
            addTask();
    });

    for (const iterator of lis) {
        iterator.addEventListener('click', toggleDone);
    }

    function toggleDone() {
        this.classList.toggle('done');
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