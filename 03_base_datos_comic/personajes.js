import { comic } from './bd.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const detalleDiv = document.getElementById('detalle-container');
const listaDiv = document.getElementById('lista-container');
const gridDiv = document.getElementById('grid-personajes');

if (id) {
  // --- MODO DETALLE ---
  listaDiv.style.display = 'none'; // Ocultar lista
  
  const p = comic.personajes.find(item => item.id === id);

  if (p) {
    detalleDiv.innerHTML = `
      <div class="detail-view">
        <img src="${p.imagen}" class="detail-img" alt="${p.nombre}">
        <div class="detail-info">
          <h2>${p.nombre}</h2>
          <p><strong>Edad:</strong> ${p.edad}</p>
          <p style="margin-top:20px; line-height:1.6;">${p.descripcion}</p>
          <a href="personajes.html" class="back-btn">⬅ Volver a la lista</a>
        </div>
      </div>
    `;
  } else {
    detalleDiv.innerHTML = `<h2 style="text-align:center; margin-top:150px;">Personaje no encontrado</h2>`;
  }

} else {
  // --- MODO LISTA ---
  detalleDiv.innerHTML = '';
  
  comic.personajes.forEach(p => {
    const card = document.createElement("a");
    card.href = `personajes.html?id=${p.id}`;
    card.className = "item-card";
    // Ajuste de tamaño para la grid
    card.style.flex = "0 0 300px"; 
    
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="item-info">
        <h3>${p.nombre}</h3>
        <p>${p.edad}</p>
      </div>
    `;
    gridDiv.appendChild(card);
  });
}