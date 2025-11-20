function cargarHero() {
  document.getElementById("hero-title").textContent = comic.nombreComic;
  document.getElementById("hero-description").textContent = comic.sinopsis;
  document.getElementById("hero-image").src = comic.portada;
}

function cargarLore() {
  document.getElementById("lore-text").textContent = comic.sinopsis;
  document.getElementById("lore-image").src = comic.portada;
}

function cargarCapitulos() {
  const contenedor = document.getElementById("chapters-container");
  contenedor.innerHTML = "";

  comic.capitulos.forEach(cap => {
    const card = document.createElement("a");
    card.classList.add("item-card", "fade-in");
    card.href = `#${cap.id}`;
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
    card.classList.add("item-card", "fade-in");
    card.href = `#${per.id}`;
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

function cargarModales() {
  const contenedor = document.getElementById("modals-container");
  contenedor.innerHTML = "";

  comic.capitulos.forEach(cap => {
    const modal = document.createElement("div");
    modal.id = cap.id;
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <a href="#" class="close-btn">✖</a>
        <h2>${cap.nombre}</h2>
        <p>${cap.descripcion}</p>
        <img src="${cap.portada}" alt="${cap.nombre}">
      </div>
    `;
    contenedor.appendChild(modal);
  });

  comic.personajes.forEach(per => {
    const modal = document.createElement("div");
    modal.id = per.id;
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <a href="#" class="close-btn">✖</a>
        <h2>${per.nombre}</h2>
        <p>${per.descripcion}</p>
        <img src="${per.imagen}" alt="${per.nombre}">
      </div>
    `;
    contenedor.appendChild(modal);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarHero();
  cargarLore();
  cargarCapitulos();
  cargarPersonajes();
  cargarModales();
});
