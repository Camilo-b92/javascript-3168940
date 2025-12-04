export let comic = {
  nombreComic: "HUELLAS DE RITMO",
  numeroEpisodios: 3,
  genero: "Fantasía / Aventura / Musical",
  sinopsis: "Narra la historia de Isabel, una niña prodigiosa en el baile que vive en una isla junto a su pueblo. Este lugar enfrenta el desafío de olvidar su herencia musical, lo cual afecta profundamente al guardián del pueblo.",
  autores: ["Carolina", "Valentina", "Jimena"],
  portada: "ejemplo.jpg", // Asegúrate de tener esta imagen
  year: 2025,

  personajes: [
    { 
      id: "isabel", 
      nombre: "Shakira / Isabel", 
      descripcion: "Isabel es una niña de 10 años con una energía inagotable. Su talento innato la convierte en la mejor bailarina de su aldea, ganándose el apodo de 'Shakira'.", 
      imagen: "shakira.png",
      edad: "10 años"
    },
    { 
      id: "lobo", 
      nombre: "Lobo", 
      descripcion: "El guardián del pueblo, un hombre sabio y fuerte que ha dedicado su vida a proteger las tradiciones y la herencia musical de su gente.", 
      imagen: "lobo.png",
      edad: "55 años"
    },
    { 
      id: "oscuridad", 
      nombre: "La Oscuridad", 
      descripcion: "Una entidad misteriosa y difusa que representa la amenaza del olvido. Se alimenta del silencio y la pérdida de las tradiciones.", 
      imagen: "SOMBRAA.png",
      edad: "Ancestral"
    }
  ],

  capitulos: [
    {
      id: "cap1",
      nombre: "Ritmos de un Sueño",
      descripcion: "Nace Isabel en la isla. Al recibir unas maracas que resuenan con su alma, descubre que la música es más que sonido: es magia.",
      portada: "ejemplo.jpg",
      video: "", // Poner URL de YouTube si existe, si no, saldrá "En producción"
      genero: "Origen",
      years: "2025",
      autores: "Carolina"
    },
    {
      id: "cap2",
      nombre: "El Canto Olvidado",
      descripcion: "Años después, la isla pierde su color y música. Shakira sueña con Lobo, quien le revela la misión de proteger la herencia ancestral.",
      portada: "ejemplo.jpg",
      video: "",
      genero: "Drama",
      years: "2025",
      autores: "Valentina"
    },
    {
      id: "cap3",
      nombre: "Ritual de Sombras",
      descripcion: "Con un collar mágico y el pueblo reunido, se libra la batalla final. Un lobo sobrenatural emerge para ayudar a Isabel contra la Oscuridad.",
      portada: "ejemplo.jpg",
      video: "",
      genero: "Clímax",
      years: "2025",
      autores: "Jimena"
    }
  ]
};