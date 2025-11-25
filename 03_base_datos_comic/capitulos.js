const episodesContainer = document.getElementById("episodes-page-container");
const modalsContainer = document.getElementById("modals-container");

comic.capitulos.forEach(c => {

  const card = document.createElement("a");
  card.classList.add("episode-card");
  card.href = `#modal-${c.id}`;
  card.innerHTML = `
    <img src="${c.portada}" alt="${c.nombre}">
    <div class="episode-info">
      <h3>${c.nombre}</h3>
      <p>${c.descripcion}</p>
    </div>
  `;
  episodesContainer.appendChild(card);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = `modal-${c.id}`;
  modal.innerHTML = `
    <div class="modal-content">
      <a href="#" class="close-btn">×</a>
      <h2>${c.nombre}</h2>
      <p>${c.descripcion}</p>
      <img src="${c.portada}" alt="${c.nombre}">
    </div>
  `;

  modalsContainer.appendChild(modal);
});
