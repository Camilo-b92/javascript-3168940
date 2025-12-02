import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const personajeId = urlParams.get('id');

const detalleContainer = document.getElementById('detalle-personaje');
const listaSection = document.getElementById('lista-personajes');
const gridPersonajes = document.getElementById('characters-container');

if (personajeId) {
  const personaje = comic.personajes.find(p => p.id === personajeId);

  if (!personaje) {
    detalleContainer.innerHTML = `<p style="text-align:center; color:#8a2be2; font-size:2.5rem; padding:100px;">Personaje no encontrado</p>`;
  } else {
    detalleContainer.innerHTML = `
      <div class="card">
        <div class="imagen">
          <img src="${personaje.imagen}" alt="${personaje.nombre}">
        </div>
        <div class="info">
          <h2>${personaje.nombre}</h2>
          <p><strong>Descripción:</strong></p>
          <p>${personaje.descripcion}</p>
          <a href="personajes.html" class="back-btn">Volver a personajes</a>
        </div>
      </div>
    `;

    document.documentElement.style.setProperty('--netflix-red', '#8a2be2');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(138, 43, 226, 0.6)');
    document.title = `${personaje.nombre} - Helikón`;
  }

  listaSection.style.display = 'none';

} else {
  detalleContainer.innerHTML = '';
  listaSection.style.display = 'block';

  comic.personajes.forEach(per => {
    const card = document.createElement('a');
    card.href = `personajes.html?id=${per.id}`;
    card.className = 'character-card';
    card.innerHTML = `
      <img src="${per.imagen}" alt="${per.nombre}">
      <div class="info">
        <h3>${per.nombre}</h3>
        <p>${per.descripcion}</p>
      </div>
    `;
    gridPersonajes.appendChild(card);
  });

  document.documentElement.style.setProperty('--netflix-red', '#8a2be2');
  document.documentElement.style.setProperty('--accent-glow', 'rgba(138, 43, 226, 0.6)');
}