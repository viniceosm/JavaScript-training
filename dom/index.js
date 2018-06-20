(function () {
    /**
     OBJETO DOCUMENT

        getElementById
            Atribuindo um novo conteudo ao paragrafo.
            document.getElementById('pmain').textContent = 'Texto alterado';

        getElementsByTagName
            Busca valores referente a tag, sendo assim, tudo que está dentro da tag.
            document.getElementsByTagName('p');

        getElementsByClassName
            Alterando texto de um getElementByClassName, é obrigado a passar o indice.
            document.getElementsByClassName('paragrafos')[0].textContent = 'texto alterado';

        querySelector
            querySelector sempre vai retornar o primeiro elemento
            document.querySelector("#idmain") 
            document.querySelector("#idmain p") // pegando o paragrafo
            document.querySelector("#idmain h2") // pegando o h2
            document.querySelector("#idmain h2").textContent = 'Alterado' // alterando valor

        querySelectorAll
            querySelectorAll sempre vai retornar uma coleção de objetos mesmo que seja de um unico elemento

        Ao digitar document no console, mostra todo o html.
    */

    document.querySelector('h1').textContent = 'Paragrafo alterado via JavaScript';
})();