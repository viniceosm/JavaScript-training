const btnIniciar = document.getElementById('btnIniciar');
const btnParar = document.getElementById('btnParar');
const btnLimpar = document.getElementById('btnLimpar');
let s = 1; m = 0; h = 0; iniciar = null;

function pararCronometro() {
	clearInterval(iniciar);
};

function limparCronometro() {
	spanHora.textContent = '00'; spanMinuto.textContent = '00'; spanSegundo.textContent = '00';
	[s, m, h] = [1, 0, 0];
};

function iniciarCronometro() {
	iniciar = window.setInterval(() => {
		s == 60 ? (m++ , s = 0) : '';
		m == 60 ? (h++ , s = 0, m = 0) : '';

		h < 10 ? spanHora.textContent = `0${h}` : spanHora.textContent = `${h}`;
		m < 10 ? spanMinuto.textContent = `0${m}` : spanMinuto.textContent = `${m}`;

		spanSegundo.textContent = s.toString().padStart(2, '0');
		s++;

	}, 1000);

	btnIniciar.disabled = true; btnLimpar.disabled = false; btnParar.disabled = false;
};

btnIniciar.addEventListener('click', iniciarCronometro);

btnParar.addEventListener('click', () => {
	pararCronometro();

	btnIniciar.disabled = false; btnLimpar.disabled = false; btnParar.disabled = true;
});

btnLimpar.addEventListener('click', () => {
	pararCronometro();
	limparCronometro();

	btnIniciar.disabled = false; btnLimpar.disabled = true; btnParar.disabled = true;
});

function informarHoraAtual() {
	// obtpem a data/hora atual
	var dataHoraAtual = new Date();

	var dia = dataHoraAtual.getDate(); // 1-31
	var diaSem = dataHoraAtual.getDay(); // 0-6 (zero=domingo)
	var mes = dataHoraAtual.getMonth(); // 0-11 (zero=janeiro)
	var ano = dataHoraAtual.getFullYear(); // 4 dígitos
	var hora = dataHoraAtual.getHours();  // 0-23
	var min = dataHoraAtual.getMinutes(); // 0-59
	var seg = dataHoraAtual.getSeconds(); // 0-59

	var sHora = new String(hora);
	if (sHora.length == 1) {
		hora = "0" + hora;
	};

	var sMin = new String(min);
	if (sMin.length == 1) {
		min = "0" + min;
	};

	var sSeg = new String(seg);
	if (sSeg.length == 1) {
		seg = "0" + seg;
	};

	var nomeDias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	var nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "Julho", "agosto", "setembro", "outubro", "novembro", "dezembro");

	document.getElementById("informaHoraAtual").innerHTML = hora + ":" + min + ":" + seg;
	document.getElementById("informaDataAtual").innerHTML = nomeDias[diaSem] + ", " + dia + " de " + nomeMes[mes] + " de " + ano;

	setTimeout("informarHoraAtual()", 1000)
};

informarHoraAtual();
