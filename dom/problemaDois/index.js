// $ em frente a variavel indica a uma referencia do DOM

var $txt = document.querySelector('txtNome');
var nome = 'Christopher';
var sobrenome = 'Dopona Lopes'

document.querySelector('#txtNome').value = `${nome} ${sobrenome}`;
//document.querySelector('#txtNome').disabled = true; // desabilitando o campo
document.querySelector('#txtNome').readOnly = true; // deixando apenas leitura


/*
Atrbuto no HTML             propriedade no JavaScript

for                         forhtml
class                       className
readonly                    readOnly
maxLength                   maxLength
cellspacing                 cellSpacing
rowspan                     rowSpan
tabindex                    tabIndex
cellpadding                 cellPadding
contenteditable             contentEditable
frameborder                 frameBorder
usemap                      useMap  
*/