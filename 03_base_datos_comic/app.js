import { comic } from './bd.js';

function cargarHero() {
  document.getElementById("hero-title").textContent = comic.nombreComic;
  document.getElementById("hero-description").textContent = comic.sinopsis;
  document.getElementById("hero-image").src = comic.portada || 'Mwuehehehe Cat.jpeg';
}

function cargarLore() {
  document.getElementById("lore-text").textContent = comic.sinopsis;
  document.getElementById("lore-image").src = comic.portada || 'Mwuehehehe Cat.jpeg';
}

function cargarCapitulos() {
  const contenedor = document.getElementById("chapters-container");
  contenedor.innerHTML = "";

  comic.capitulos.forEach(cap => {
    const card = document.createElement("a");
    card.href = `capitulos.html?id=${cap.id}`;
    card.classList.add("item-card");
    card.innerHTML = `
      <img src="${cap.portada}" alt="${cap.nombre}" />
      <div class="item-info">
        <h3>${cap.nombre}</h3>
        <p>${cap.descripcion}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function cargarPersonajes() {
  const contenedor = document.getElementById("characters-container");
  contenedor.innerHTML = "";

  comic.personajes.forEach(per => {
    const card = document.createElement("a");
    card.href = `personajes.html?id=${per.id}`;
    card.classList.add("item-card");
    card.innerHTML = `
      <img src="${per.imagen}" alt="${per.nombre}" />
      <div class="item-info">
        <h3>${per.nombre}</h3>
        <p>${per.descripcion}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const header = document.getElementById('main-header');

  if (currentScroll <= 0) {
    header.classList.remove('hidden');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
    header.classList.add('hidden');
  } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
    header.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});

document.addEventListener("DOMContentLoaded", () => {
  cargarHero();
  cargarLore();
  cargarCapitulos();
  cargarPersonajes();
});