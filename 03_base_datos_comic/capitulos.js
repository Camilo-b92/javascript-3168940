import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const capituloId = urlParams.get('id');

const detalleContainer = document.getElementById('detalle-capitulo');
const listaSection = document.getElementById('lista-capitulos');
const gridCapitulos = document.getElementById('episodes-container');

if (capituloId) {
  const cap = comic.capitulos.find(c => c.id === capituloId);

  if (!cap) {
    detalleContainer.innerHTML = `<p style="text-align:center; color:#ff4500; font-size:2.5rem; padding:120px;">Capítulo no encontrado</p>`;
  } else {
    const videoHTML = cap.video
      ? `<iframe width="100%" height="520" src="${cap.video}" title="${cap.nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      : `<div class="video-placeholder"><p>Video en producción</p></div>`;

    detalleContainer.innerHTML = `
      <div class="card">
        <div class="video-container">
          ${videoHTML}
        </div>
        <div class="info">
          <h2>${cap.nombre}</h2>
          <p><strong>Género:</strong> ${cap.genero}</p>
          <p><strong>Año:</strong> ${cap.years}</p>
          <p><strong>Autor:</strong> ${cap.autores}</p>
          <p>${cap.descripcion}</p>
          <a href="capitulos.html" class="back-btn">Volver a capítulos</a>
        </div>
      </div>
    `;

    document.documentElement.style.setProperty('--color-principal', '#ff4500');
    document.title = `${cap.nombre} - Helikón`;
  }

  listaSection.style.display = 'none';
} else {
  detalleContainer.innerHTML = '';
  listaSection.style.display = 'block';

  comic.capitulos.forEach(cap => {
    const card = document.createElement('a');
    card.href = `capitulos.html?id=${cap.id}`;
    card.className = 'episode-card';
    card.innerHTML = `
      <img src="${cap.portada}" alt="${cap.nombre}">
      <div class="info">
        <h3>${cap.nombre}</h3>
        <p>${cap.descripcion}</p>
      </div>
    `;
    gridCapitulos.appendChild(card);
  });
}