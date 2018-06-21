(function () {
    var trs = document.querySelectorAll('.js-tabela tbody .aluno');
    var x = 0;

    while(trs[x]){
        var linhaAluno = trs[x];
        var tds = linhaAluno.querySelectorAll('td');
        var notas = recuperarNumerosDeColunas(tds);

        media = calcularMedia.apply(this, notas);

        linhaAluno.querySelector('.aluno-m').textContent = media;
        x++;
    };

    function recuperarNumerosDeColunas(tds) {
      var x = 0;
      var arr = [];
      while (tds[x]) {
        if (!isNaN(tds[x].textContent) && tds[x].textContent != '') {
            arr.push(parseFloat(tds[x].textContent));
        };
        x++;
      };
      return arr;
    };
})();