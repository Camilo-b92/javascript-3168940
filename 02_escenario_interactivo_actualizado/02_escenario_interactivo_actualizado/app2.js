//1. Captura de variables
const demonios = document.querySelectorAll(".demonio");
const puntos = document.querySelector("#puntos");
let contador = 0;

console.log(demonios, puntos);

//2. Funciones
demonios.forEach(item => {
  item.addEventListener("click", () => {
    item.style.filter = "grayscale(1)";
    item.classList.add("saltar"); 
    
    contador++;
    puntos.textContent = contador;
  });
});

//3. Eventos
