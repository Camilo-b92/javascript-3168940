import { comic } from './bd.js';

function cargarHero() {
  document.getElementById("hero-title").textContent = comic.nombreComic;
  document.getElementById("hero-description").textContent = comic.sinopsis;
}

function crearCarruselHero() {
  const carousel = document.getElementById('hero-carousel');
  const dotsContainer = document.getElementById('hero-dots');

  comic.heroSlides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('hero-slide');
    if (index === 0) slideDiv.classList.add('active');

    slideDiv.innerHTML = `
      <img src="${slide.imagen}" alt="${slide.titulo}" loading="lazy" />
      <div class="hero-overlay"></div>
    `;
    carousel.appendChild(slideDiv);

    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;

  window.goToSlide = function(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };

  document.querySelector('.carousel-next').addEventListener('click', () => goToSlide(currentSlide + 1));
  document.querySelector('.carousel-prev').addEventListener('click', () => goToSlide(currentSlide - 1));

  setInterval(() => goToSlide(currentSlide + 1), 7500);
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
    card.classList.add("item-card", "slide-up");
    card.innerHTML = `
      <img src="${cap.portada}" alt="${cap.nombre}" loading="lazy" />
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
    card.classList.add("item-card", "slide-up");
    card.innerHTML = `
      <img src="${per.imagen}" alt="${per.nombre}" loading="lazy" />
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
  if (currentScroll <= 0) { header.classList.remove('hidden'); return; }
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
  crearCarruselHero();
  cargarCapitulos();
  cargarPersonajes();
});