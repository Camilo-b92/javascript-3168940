let puntos = 0;
let vidas = 3;
let invulnerable = true;

const puntosSpan = document.getElementById('puntos');
const vidasSpan = document.getElementById('vidas');

const jugador = document.querySelector('.jugador');
const corazones = document.querySelectorAll('.corazon');
let demonios = document.querySelectorAll('.demonio');

let velocidades = [];
let direcciones = [];

setTimeout(() => invulnerable = false, 2000);

function inicializarDemonios() {
  velocidades = [];
  direcciones = [];

  demonios.forEach(demonio => {
    demonio.style.left = `${Math.random() * 650}px`;
    demonio.style.top = `${Math.random() * 400}px`;

    velocidades.push({
      x: Math.random() * 2 + 1,
      y: Math.random() * 2 + 1
    });
    direcciones.push({
      x: Math.random() < 0.5 ? 1 : -1,
      y: Math.random() < 0.5 ? 1 : -1
    });
  });
}
inicializarDemonios();

function matarDemonio(demonio) {
  if (!demonio.classList.contains('muerto')) {
    puntos += 10;
    puntosSpan.textContent = puntos;

    demonio.classList.add('flash');
    setTimeout(() => {
      demonio.remove();
      generarNuevoDemonio();
    }, 200);
  }
}

demonios.forEach(demonio =>
  demonio.addEventListener('click', () => matarDemonio(demonio))
);

corazones.forEach(corazon =>
  corazon.addEventListener('click', () => {
    vidas++;
    vidasSpan.textContent = vidas;
    corazon.style.display = 'none';
  })
);

function moverDemonios() {
  demonios.forEach((demonio, i) => {
    if (!velocidades[i] || !direcciones[i]) return;

    let left = parseFloat(demonio.style.left) || 0;
    let top = parseFloat(demonio.style.top) || 0;

    left += velocidades[i].x * direcciones[i].x;
    top += velocidades[i].y * direcciones[i].y;

    if (left <= 0 || left >= 690) direcciones[i].x *= -1;
    if (top <= 0 || top >= 430) direcciones[i].y *= -1;

    demonio.style.left = `${left}px`;
    demonio.style.top = `${top}px`;
  });

  requestAnimationFrame(moverDemonios);
}
moverDemonios();

function colision(a, b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();

  return !(
    rectA.top > rectB.bottom ||
    rectA.bottom < rectB.top ||
    rectA.left > rectB.right ||
    rectA.right < rectB.left
  );
}

function verificarColisiones() {
  demonios.forEach(demonio => {
    if (colision(jugador, demonio) && !invulnerable) {
      vidas--;
      vidasSpan.textContent = vidas;
      invulnerable = true;
      jugador.classList.add('flash');

      setTimeout(() => {
        invulnerable = false;
        jugador.classList.remove('flash');
      }, 2000);

      if (vidas <= 0) {
        document.getElementById('gameOver').style.display = 'block';
        setTimeout(() => location.reload(), 3000);
      }
    }
  });

  corazones.forEach(corazon => {
    if (corazon.style.display !== 'none' && colision(jugador, corazon)) {
      vidas++;
      puntos += 50;
      vidasSpan.textContent = vidas;
      puntosSpan.textContent = puntos;
      corazon.style.display = 'none';
    }
  });
}
setInterval(verificarColisiones, 100);

function generarNuevoDemonio() {
  const escenario = document.querySelector('.escenario');
  const nuevo = document.createElement('img');
  nuevo.src = 'demonio 1.png';
  nuevo.alt = 'Nuevo demonio';
  nuevo.classList.add('asset', 'clickeable', 'demonio');
  nuevo.style.width = '60px';
  nuevo.style.left = `${Math.random() * 650}px`;
  nuevo.style.top = `${Math.random() * 400}px`;

  escenario.appendChild(nuevo);

  demonios = document.querySelectorAll('.demonio');

  velocidades.push({
    x: Math.random() * 2 + 1,
    y: Math.random() * 2 + 1
  });
  direcciones.push({
    x: Math.random() < 0.5 ? 1 : -1,
    y: Math.random() < 0.5 ? 1 : -1
  });

  nuevo.addEventListener('click', () => matarDemonio(nuevo));
}
