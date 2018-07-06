// Delegação de evento, técnica que consiste em atrelar o evento a um elemento mais alto e verificar quem foi o elemento clicado

var $ul = document.querySelector('ul');
var $lis = document.querySelectorAll('li');

// for (const iterator of $lis) {
//     iterator.addEventListener('click', function (e) {
//         console.log(`Clicou na li`);
//     });
// }

$ul.addEventListener('click', function (e) {
   e.stopPropagation();
   console.log(this);
   console.log(e.target);
   console.log(e.currentTarget);
   console.log(e.target.nodeName);

   if (e.target.nodeName === "LI") {
       alert('Clicou na li');
   };
});