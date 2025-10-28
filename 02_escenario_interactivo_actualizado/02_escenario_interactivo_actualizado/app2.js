// ESCENARIO 1 - DOOM

const demonios = document.querySelectorAll("#fondo .demonio");
const corazones = document.querySelectorAll("#fondo .corazon");
const puntos = document.querySelector("#fondo #puntos");
const vidas = document.querySelector("#fondo #vidas");
let contador = 0;
let contadorVidas = 3;

// Demonios
demonios.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("saltar");
    item.style.pointerEvents = "none";
    contador++;
    puntos.textContent = contador;
  });
});

// Corazones
corazones.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("moveCorazones");
    item.style.pointerEvents = "none";
    contadorVidas++;
    vidas.textContent = contadorVidas;
  });
});

// ESCENARIO 2 - GOD OF WAR

const demoniosGow = document.querySelectorAll("#fondo_gow .demonio");
const corazonesGow = document.querySelectorAll("#fondo_gow .corazon");
const puntosGow = document.querySelector("#fondo_gow #puntos");
const vidasGow = document.querySelector("#fondo_gow #vidas");
let contadorGow = 0;
let contadorVidasGow = 3;

// Demonios GOW
demoniosGow.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("saltar");
    item.style.pointerEvents = "none";
    contadorGow++;
    puntosGow.textContent = contadorGow;
  });
});

// Corazones GOW
corazonesGow.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("moverCorazones");
    item.style.pointerEvents = "none";
    contadorVidasGow++;
    vidasGow.textContent = contadorVidasGow;
  });
});


// ESCENARIO 3 - DUMBO

const demoniosDumbo = document.querySelectorAll("#fondo_dumbo .demonio");
const corazonesDumbo = document.querySelectorAll("#fondo_dumbo .corazon");
const puntosDumbo = document.querySelector("#fondo_dumbo #puntos");
const vidasDumbo = document.querySelector("#fondo_dumbo #vidas");
let contadorDumbo = 0;
let contadorVidasDumbo = 3;

// Demonios Dumbo
demoniosDumbo.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("saltar");
    item.style.pointerEvents = "none";
    contadorDumbo++;
    puntosDumbo.textContent = contadorDumbo;
  });
});

// Corazones Dumbo
corazonesDumbo.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("moverCorazones");
    item.style.pointerEvents = "none";
    contadorVidasDumbo++;
    vidasDumbo.textContent = contadorVidasDumbo;
  });
});
