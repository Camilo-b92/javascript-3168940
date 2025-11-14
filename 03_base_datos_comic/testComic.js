const infocomic = document.querySelector(".info-comic")

console.log (infocomic)  

infocomic.innerHTML = `
        <small>${comic.year}</small>
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sipnosis}</p>
        <p>Genero: ${comic.genero}</p>
`
