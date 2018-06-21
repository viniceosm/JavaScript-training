(function () {
    var trs = document.querySelectorAll('.js-tabela tbody .aluno');
    var x = 0;

    while(trs[x]){
        var linhaAluno = trs[x];
        var n1, n2, n3, n4, media;
        var tds = linhaAluno.querySelectorAll('td');
        n1 = pegaNota(tds[1]); n2 = pegaNota(tds[2]);  n3 = pegaNota(tds[3]); n4 = pegaNota(tds[4]);
        media = calcularMedia(n1, n2, n3, n4);
        linhaAluno.querySelector('.aluno-m').textContent = media;
        x++;
    };

    function pegaNota(td) {
        return parseFloat(td.textContent);
    };   
})();