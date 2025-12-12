import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const personajeId = urlParams.get('id');
const mostrarLista = urlParams.get('list') !== null;

const detalleContainer = document.getElementById('detalle-personaje');
const listaSection = document.getElementById('lista-personajes');
const gridPersonajes = document.getElementById('characters-container');

if (mostrarLista) {
  detalleContainer.innerHTML = '';
  listaSection.style.display = 'block';

  comic.personajes.forEach((per, index) => {
    const card = document.createElement('a');
    card.href = `personajes.html?id=${per.id}`;
    card.className = 'character-card slide-up';
    card.style.animationDelay = `${0.15 + index * 0.12}s`;
    card.innerHTML = `
      <img src="${per.imagen}" alt="${per.nombre}" loading="lazy">
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

else if (personajeId) {
  const personaje = comic.personajes.find(p => p.id === personajeId);

  if (!personaje) {
    window.location.href = 'index.html';
  } else {
    listaSection.style.display = 'none';

    detalleContainer.innerHTML = `
      <div class="card fade-in slide-up">
        <div class="imagen">
          <img src="${personaje.imagen}" alt="${personaje.nombre}" loading="lazy">
        </div>
        <div class="info">
          <h2>${personaje.nombre}</h2>
          <p><strong>Descripción:</strong></p>
          <p>${personaje.descripcion}</p>
          <button onclick="history.back()" class="back-btn-modern">
            ← Volver atrás
          </button>
        </div>
      </div>
    `;

    document.documentElement.style.setProperty('--netflix-red', '#8a2be2');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(138, 43, 226, 0.6)');
    document.title = `${personaje.nombre} - Helikón`;
  }
}

else {
  window.location.href = 'index.html';
}