/**
 * OBJETO DOCUMENT
 * getElementById
 * getElementsByTagName
 * getElementsByClassName
 * querySelector
 * querySelectorAll
 */

// document no console, mostra todo o html.

// Atribuindo um novo conteudo ao paragrafo.
document.getElementById('pmain').textContent = 'Texto alterado';

// Busca valores referente a tag, sendo assim, tudo que está dentro da tag.

document.getElementsByTagName('p');

// Alterando texto de um getElementByClassName, é obrigado a passar o indice.
document.getElementsByClassName('paragrafos')[0].textContent = 'texto alterado';

// querySelector sempre vai retornar o primeiro elemento
document.querySelector("#idmain") 
document.querySelector("#idmain p") // pegando o paragrafo
document.querySelector("#idmain h2") // pegando o h2
document.querySelector("#idmain h2").textContent = 'Alterado' // alterando valor

// querySelectorAll sempre vai retornar uma coleção de objetos mesmo que seja de um unico elemento