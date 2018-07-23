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

    function addTask() {
        let task = `<li>${txtTask.value}</li>`;
        ul.innerHTML += task;
        limpaCampo();
    };

    function limpaCampo() {
        txtTask.value = "";
        txtTask.focus();
    };
})();