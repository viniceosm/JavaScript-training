const btnIniciar = document.getElementById('btnIniciar');

let s = 1; m = 0; h = 0;

btnIniciar.addEventListener('click', () => {
	window.setInterval(function () {
		s == 60 ? (m++, s = 0) : '';
		m == 60 ? (h++, s = 0, m = 0) : '';

		h < 10 ? spanHora.textContent = `0${h}` : spanHora.textContent = `${h}`;
		m < 10 ? spanMinuto.textContent = `0${m}` : spanMinuto.textContent = `${m}`;

		/* If substituido por padStart
		s < 10 ? spanSegundo.textContent = `0${s}` : spanSegundo.textContent = `${s}`; */
		spanSegundo.textContent = s.toString().padStart(2, '0');
		s++;
	}, 1000);
});