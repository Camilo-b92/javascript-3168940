const imagen = document.getElementById('Imagen');
const btnBlancoNegro = document.getElementById('btnBlancoNegro');
const btnDesenfocar = document.getElementById('btnDesenfocar');
const btnZoomRotar = document.getElementById('btnZoomRotar');

btnBlancoNegro.addEventListener('click', () => {
  imagen.classList.toggle('blanco-negro');
});

btnDesenfocar.addEventListener('click', () => {
  imagen.classList.toggle('desenfocar');
});

btnZoomRotar.addEventListener('click', () => {
  imagen.classList.toggle('zoom-rotar');
});