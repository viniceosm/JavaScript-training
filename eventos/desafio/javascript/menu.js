(function(){

    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');
    var arialControl = $btn.getAttribute('aria-controls');
    var $menu = document.getElementById(arialControl);
    
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');
        var ariaExpanded = this.getAttribute('aria-expanded') === "true";

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);
    })
})()