const container = document.getElementById("characters-page-container");
const modalContainer = document.getElementById("modals-container");

comic.personajes.forEach(p => {

  const card = document.createElement("a");
  card.classList.add("character-card");
  card.href = `#modal-${p.id}`;
  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <div class="character-info">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
    </div>
  `;
  container.appendChild(card);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = `modal-${p.id}`;
  modal.innerHTML = `
    <div class="modal-content">
      <a href="#" class="close-btn">×</a>
      <h2>${p.nombre}</h2>
      <p>${p.descripcion}</p>
      <img src="${p.imagen}" alt="${p.nombre}">
    </div>
  `;

  modalContainer.appendChild(modal);
});
