import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const detalleDiv = document.getElementById('detalle-capitulo');
const listaDiv = document.getElementById('lista-capitulos');
const gridDiv = document.getElementById('grid-capitulos');

if (id) {
  // MODO DETALLE
  listaDiv.style.display = 'none';
  const c = comic.capitulos.find(item => item.id === id);

  if (c) {
    // Si hay link de video real, usa iframe, si no, un placeholder
    const player = c.video 
      ? `<iframe width="100%" height="100%" src="${c.video}" frameborder="0" allowfullscreen></iframe>`
      : `<h3 style="color:gray;">Video no disponible</h3>`;

    detalleDiv.innerHTML = `
      <div class="chapter-detail">
        <div class="video-wrapper">
          ${player}
        </div>
        <h1>${c.nombre}</h1>
        <div class="chapter-meta">
          <span>${c.years}</span>
          <span>${c.genero}</span>
          <span>Autor: ${c.autores}</span>
        </div>
        <p style="font-size:1.2rem; line-height:1.6;">${c.descripcion}</p>
        <br>
        <a href="capitulos.html" style="color:var(--text-light); text-decoration:underline;">Volver a lista</a>
      </div>
    `;
  } else {
    detalleDiv.innerHTML = `<h2 style="text-align:center; padding-top:150px">Capítulo no encontrado</h2>`;
  }

} else {
  // MODO LISTA
  detalleDiv.innerHTML = '';
  
  comic.capitulos.forEach(c => {
    const card = document.createElement("a");
    card.href = `capitulos.html?id=${c.id}`;
    card.className = "item-card";
    card.style.flex = "0 0 320px";
    
    card.innerHTML = `
      <img src="${c.portada}" alt="${c.nombre}">
      <div class="item-info">
        <h3>${c.nombre}</h3>
        <p>${c.descripcion.substring(0, 60)}...</p>
      </div>
    `;
    gridDiv.appendChild(card);
  });
}