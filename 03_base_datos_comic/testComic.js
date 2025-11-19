const infocomic = document.querySelector(".info-comic");
const cardPersonajes = document.querySelector(".card-personajes");

console.log (infocomic)  
console.log (comic.personajes)

infocomic.innerHTML = `
        <small>${comic.year}</small>
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sipnosis}</p>
        <p>Genero: ${comic.genero}</p>
`
comic.personajes.forEach(char => {
      //CREAR ELEMENTOS DINAMICAMENTE CON JAVASCRIPT
      const div= document.createElement("div")
      div.classList.add("personajes")
      div.innerHTML = `
            <img src="${char.imagen}" alt="">
            <p>${char.nombre}</p>
            <p>${char.descripción}</p>
            `        
      cardPersonajes.appendChild(div)



});

