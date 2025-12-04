import { comic } from './bd.js';

// Cargar Hero
function cargarHero() {
  document.getElementById("hero-title").textContent = comic.nombreComic;
  // Usamos substring para no poner toda la sinopsis en el hero si es muy larga
  document.getElementById("hero-description").textContent = comic.sinopsis; 
  document.getElementById("hero-image").src = comic.portada || 'ejemplo.jpg';
}

// Cargar Carruseles
function cargarListas() {
  const contPersonajes = document.getElementById("characters-container");
  const contCapitulos = document.getElementById("chapters-container");

  // Personajes
  comic.personajes.forEach(p => {
    const card = document.createElement("a");
    card.href = `personajes.html?id=${p.id}`;
    card.classList.add("item-card");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <div class="item-info">
        <h3>${p.nombre}</h3>
        <p>${p.edad}</p>
      </div>
    `;
    contPersonajes.appendChild(card);
  });

  // Capítulos
  comic.capitulos.forEach(c => {
    const card = document.createElement("a");
    card.href = `capitulos.html?id=${c.id}`;
    card.classList.add("item-card");
    card.innerHTML = `
      <img src="${c.portada}" alt="${c.nombre}" />
      <div class="item-info">
        <h3>${c.nombre}</h3>
        <p>Episodio ${c.id.replace('cap','')}</p>
      </div>
    `;
    contCapitulos.appendChild(card);
  });
}

// Lógica del Header al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const header = document.getElementById('main-header');

  if (currentScroll > lastScroll && currentScroll > 50) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
  cargarHero();
  cargarListas();
});