function infoHoraDataAtual() {
	const nomeDias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	const nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "Julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
	let dataHoraAtual = new Date();
	let dia = dataHoraAtual.getDate(); // 1-31
	let diaSem = dataHoraAtual.getDay(); // 0-6 (zero=domingo)
	let mes = dataHoraAtual.getMonth(); // 0-11 (zero=janeiro)
	let ano = dataHoraAtual.getFullYear(); // 4 dígitos
	let hora = dataHoraAtual.getHours();  // 0-23
	let min = dataHoraAtual.getMinutes(); // 0-59
	let seg = dataHoraAtual.getSeconds(); // 0-59

	hora = hora.toString().padStart(2, '0');
	min = min.toString().padStart(2, '0');
	seg = seg.toString().padStart(2, '0');

	infoHoraAtual.innerHTML = `${hora}:${min}:${seg}`;
	infoDataAtual.innerHTML = `${nomeDias[diaSem]}, ${dia} de ${nomeMes[mes]} de ${ano}`;

	setTimeout("infoHoraDataAtual()", 1000);
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

infoHoraDataAtual();
