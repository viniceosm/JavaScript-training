const btnIniciar = document.getElementById('btnIniciar');
const btnParar = document.getElementById('btnParar');
const btnLimpar = document.getElementById('btnLimpar');
let s = 1; m = 0; h = 0; iniciar = null;

function pararCronometro() {
	clearInterval(iniciar);
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

	spanHora.textContent = '00'; spanMinuto.textContent = '00'; spanSegundo.textContent = '00';

	btnIniciar.disabled = false; btnLimpar.disabled = true; btnParar.disabled = true;
});