export let comic = {
  nombreComic: "Cuerdas del Destino",
  numeroEpisodios: 3,
  genero: "Ficción / Fantasia Urbana",
  sinopsis: "En un mundo donde la música puede alterar el destino, un grupo de jóvenes descubre que sus canciones despiertan antiguas entidades que controlan el tejido de la realidad.",
  autores: ["Bryhan", "Gabriel", "Camilo"],
  portada: "portada.jpg",
  year: 2025,

  personajes: [
    { id: "juanes", nombre: "Juanes", descripcion: "Guitarrista prodigio con la habilidad de ver hilos del destino al tocar.", imagen: "personajes/juanes.jpg" },
    { id: "entidad", nombre: "La Entidad", descripcion: "Ser ancestral que se manifiesta a través de melodías prohibidas.", imagen: "personajes/entidad.jpg" },
    { id: "samuel", nombre: "Samuel", descripcion: "Baterista y estratega del grupo.", imagen: "personajes/samuel.jpg" },
    { id: "valeria", nombre: "Valeria", descripcion: "Vocalista principal con voz hipnótica.", imagen: "personajes/valeria.jpg" },
    { id: "ruben", nombre: "Rubén", descripcion: "Bajista y hacker del sonido.", imagen: "personajes/ruben.jpg" },
    { id: "elena", nombre: "Elena", descripcion: "Tecladista e investigadora.", imagen: "personajes/elena.jpg" }
  ],

  capitulos: [
    {
      id: "cap1",
      nombre: "El Primer Acorde",
      descripcion: "Un concierto clandestino despierta accidentalmente una entidad dormida. Todo cambia en una sola noche.",
      portada: "capitulos/cap1-portada.jpg",
      video: "https://www.youtube.com/embed/3tT9q2uJq6c",
      genero: "Ficción / Fantasía Urbana",
      years: "2025",
      autores: "Bryhan"
    },
    {
      id: "cap2",
      nombre: "Hilos Rotos",
      descripcion: "El grupo descubre que cada canción que tocan altera el destino de alguien. Ahora son cazados.",
      portada: "capitulos/cap2-portada.jpg",
      video: "https://www.youtube.com/embed/3g0Z0qMhKqU",
      genero: "Ficción / Fantasía Urbana",
      years: "2025",
      autores: "Gabriel"
    },
    {
      id: "cap3",
      nombre: "Sinfonía Final",
      descripcion: "La confrontación definitiva. Una sola canción decidirá si el mundo sigue existiendo tal como lo conocemos.",
      portada: "capitulos/cap3-portada.jpg",
      video: "https://www.youtube.com/embed/8Z1Z0Z0q0Z0",
      genero: "Ficción / Fantasía Urbana",
      years: "2025",
      autores: "Camilo"
    }
  ]
};