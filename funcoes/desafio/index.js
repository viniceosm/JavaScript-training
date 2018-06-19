// IMC
(function () {
    function calcularIMC(peso, altura, callback) {
        var imc = peso / (altura * altura);   
        if (callback && typeof callback === 'function') {
            return callback(imc);      
        }
        console.log('Não passou callback!');
        
        return imc;
    }

    function classificaIMC(imc) {
        if (imc <= 16.9) {
            return 'muito abaixo do peso';
        } else if (imc <= 18.4) {
            return 'abaixo do peso';
        } else if (imc <= 24.9) {
            return 'normal';
        } else if (imc <= 29.9) {
            return 'acima do peso';
        } else if (imc <= 34.9) {
            return 'obesidade  I'
        } else if (imc <= 40) {
            return 'obesidade  II'
        } else {
            return 'obesidade III'
        }
    }

    var imc = calcularIMC(75, 1.74, classificaIMC);

    console.log('Classificação IMC: ', imc);
})();