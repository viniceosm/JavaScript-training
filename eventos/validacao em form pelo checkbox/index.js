(function () {
    'use strict';
    var btn = document.getElementById('btn');
    var chk = document.getElementById('chk');
    
    toggleBtn();

    chk.addEventListener('change', toggleBtn);

    function toggleBtn() { btn.disabled = !chk.checked; }

})();