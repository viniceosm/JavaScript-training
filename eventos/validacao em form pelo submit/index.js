(function () {
    'use strict';
    var $form = document.querySelector('form');
    var $txtUser = document.getElementById('txtUser');
    var $txtPass = document.getElementById('txtPass');
    var $btn = document.getElementById('btn');

    $form.addEventListener('submit', (e) => {
        if (!$txtUser.value || !$txtPass.value) {
            alert('Preencha todos os campos')
            e.preventDefault();
        };
    });
})();