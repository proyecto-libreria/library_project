let libros = [
    {
        title: "El Alquimista",
        author: "Paulo Coelho",
        genre: "Novela",
        language: "Español",
        price: 25000,
        format: "Físico",
        isbn: "978-84-7967-664-4",
        description: "Una historia de autoconocimiento y búsqueda de la felicidad.",
        condition: "Nuevo",
        location: "Librería Nacional",
        publicationDate: "1988",
        publisher: "Planeta",
        pages: 208
    },
    {
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        genre: "Novela",
        language: "Español",
        price: 30000,
        format: "Físico",
        isbn: "978-84-204-1143-9",
        description: "La historia de la familia Buendía en el pueblo de Macondo.",
        condition: "Usado",
        location: "Librería El Mundo",
        publicationDate: "1967",
        publisher: "Sudamericana",
        pages: 416
    },
    {
        title: "El Señor de los Anillos",
        author: "J.R.R. Tolkien",
        genre: "Fantasía",
        language: "Español",
        price: 40000,
        format: "Físico",
        isbn: "978-84-9759-651-1",
        description: "La historia de la búsqueda del Anillo Único en la Tierra Media.",
        condition: "Nuevo",
        location: "Librería Fantástica",
        publicationDate: "1954",
        publisher: "Minotauro",
        pages: 1152
    },
    {
        title: "La Sombra del Viento",
        author: "Carlos Ruiz Zafón",
        genre: "Novela",
        language: "Español",
        price: 28000,
        format: "Físico",
        isbn: "978-84-9759-370-1",
        description: "La historia de un joven que descubre un libro misterioso en la Biblioteca del Cementerio de los Libros Olvidados.",
        condition: "Nuevo",
        location: "Librería Nacional",
        publicationDate: "2001",
        publisher: "Planeta",
        pages: 416
    },
    {
        title: "El Principito",
        author: "Antoine de Saint-Exupéry",
        genre: "Ficción",
        language: "Español",
        price: 18000,
        format: "Físico",
        isbn: "978-84-204-1144-6",
        description: "La historia de un joven príncipe que viaja por el espacio y descubre la importancia de la amistad.",
        condition: "Usado",
        location: "Librería El Mundo",
        publicationDate: "1943",
        publisher: "Sudamericana",
        pages: 96
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopia",
        language: "Español",
        price: 22000,
        format: "Físico",
        isbn: "978-84-9759-652-5",
        description: "La historia de un futuro distópico en el que el gobierno controla todos los aspectos de la vida.",
        condition: "Nuevo",
        location: "Librería Fantástica",
        publicationDate: "1949",
        publisher: "Minotauro",
        pages: 320
    },
    {
        title: "El Amor en los Tiempos del Cólera",
        author: "Gabriel García Márquez",
        genre: "Novela",
        language: "Español",
        price: 35000,
        format: "Físico",
        isbn: "978-84-204-1145-3",
        description: "La historia de un amor que dura toda una vida.",
        condition: "Nuevo",
        location: "Librería Nacional",
        publicationDate: "1985",
        publisher: "Sudamericana",
        pages: 544
    },
    {
        title: "La Casa de los Espíritus",
        author: "Isabel Allende",
        genre: "Novela",
        language: "Español",
        price: 32000,
        format: "Físico",
        isbn: "978-84-9759-371-3",
        description: "La historia de tres generaciones de una familia chilena.",
        condition: "Nuevo",
        location: "Librería Fantástica",
        publicationDate: "1982",
        publisher: "Planeta",
        pages: 448
    },
    {
        title: "El Aleph",
        author: "Jorge Luis Borges",
        genre: "Cuentos",
        language: "Español",
        price: 25000,
        format: "Físico",
        isbn: "978-84-204-1146-0",
        description: "Un conjunto de cuentos que exploran la filosofía y la literatura.",
        condition: "Usado",
        location: "Librería El Mundo",
        publicationDate: "1949",
        publisher: "Sudamericana",
        pages: 224
    },
    {
        title: "La Ciudad y los Perros",
        author: "Mario Vargas Llosa",
        genre: "Novela",
        language: "Español",
        price: 28000,
        format: "Físico",
        isbn: "978-84-9759-372-0",
        description: "La historia de un grupo de jóvenes en un colegio militar en Perú.",
        condition: "Nuevo",
        location: "Librería Nacional",
        publicationDate: "1963",
        publisher: "Planeta",
        pages: 416
    },
    {
        title: "El Nombre de la Rosa",
        author: "Umberto Eco",
        genre: "Novela",
        language: "Español",
        price: 38000,
        format: "Físico",
        isbn: "978-84-9759-373-7",
        description: "La historia de un monje que investiga una serie de asesinatos en un monasterio medieval.",
        condition: "Nuevo",
        location: "Librería Fantástica",
        publicationDate: "1980",
        publisher: "Minotauro",
        pages: 592
    },
    {
        title: "La Sombra del Cisne",
        author: "Manuel Mujica Lainez",
        genre: "Novela",
        language: "Español",
        price: 30000,
        format: "Físico",
        isbn: "978-84-204-1147-7",
        description: "La historia de un joven que descubre un misterioso cisne en un lago.",
        condition: "Usado",
        location: "Librería El Mundo",
        publicationDate: "1992",
        publisher: "Sudamericana",
        pages: 272
    },
    {
        title: "El Amante de Lady Chatterley",
        author: "D.H. Lawrence",
        genre: "Novela",
        language: "Español",
        price: 26000,
        format: "Físico",
        isbn: "978-84-9759-374-4",
        description: "La historia de un amor prohibido entre una mujer casada y su guardaespaldas.",
        condition: "Nuevo",
        location: "Librería Nacional",
        publicationDate: "1928",
        publisher: "Planeta",
        pages: 336
    },
    {
        title: "La Casa de la Pradera",
        author: "Laura Ingalls Wilder",
        genre: "Literatura Infantil",
        language: "Español",
        price: 20000,
        format: "Físico",
        isbn: "978-84-204-1148-4",
        description: "La historia de una familia que se muda a una granja en el oeste de conditions Unidos.",
        condition: "Nuevo",
        location: "Librería Fantástica",
        publicationDate: "1935",
        publisher: "Sudamericana",
        pages: 272
    },
    {
        title: "El Poder y la Gloria",
        author: "Graham Greene",
        genre: "Novela",
        language: "Español",
        price: 24000,
        format: "Físico",
        isbn: "978-84-9759-375-1",
        description: "La historia de un sacerdote que se enfrenta a la persecución en México",
        condition: "Usado",
        location: "Librería El Mundo",
        publicationDate: "1940",
        publisher: "Minotauro",
        pages: 272
    },
    {
        title: "Pedro Páramo",
        author: "Juan Rulfo",
        genre: "Novela",
        language: "Español",
        price: 28000,
        format: "Físico",
        isbn: "978-84-9759-379-9",
        description: "La búsqueda de un hijo por su padre, ambientada en un pueblo fantasmal de México.",
        condition: "Nuevo",
        ubicacion: "Librería Fantástica",
        publicationDate: "1955",
        publisher: "Minotauro",
        pages: 124
    },
    {
        title: "La Metamorfosis",
        author: "Franz Kafka",
        genre: "Novela",
        language: "Español",
        price: 26000,
        format: "Físico",
        isbn: "978-84-9759-378-2",
        description: "La historia de Gregorio Samsa, quien se despierta un día transformado en un insecto.",
        condition: "Nuevo",
        ubicacion: "Librería Nacional",
        publicationDate: "1915",
        publisher: "Planeta",
        pages: 224
    },
    {
        title: "La Casa Grande",
        author: "Álvaro Mutis",
        genre: "Novela",
        language: "Español",
        price: 22000,
        format: "Físico",
        isbn: "978-84-235-0349-8",
        description: "Una novela semi-autobiográfica que narra la historia de un hombre que busca su lugar en el mundo.",
        condition: "Nuevo",
        ubicacion: "Librería Nacional",
        publicationDate: "1954",
        publisher: "Alfaguara",
        pages: 272
    },
    {
        title: "Los Hermanos Detectives",
        author: "José Luis Peón",
        genre: "Novela negra",
        language: "Español",
        price: 25000,
        format: "Físico",
        isbn: "978-958-748-073-2",
        description: " Una novela que sigue la investigación de dos detectives en la Ciudad de México.",
        condition: "Nuevo",
        ubicacion: " Librería Universitaria",
        publicationDate: "2017",
        publisher: "Planeta",
        pages: 288
    },
    {
        title: "El tiempo de las moscas",
        author: "María Fernanda Heredia",
        genre: "Novela juvenil",
        language: "Español",
        price: 16000,
        format: "Físico",
        isbn: "978-958-42-3809-1",
        description: "Una novela que narra la historia de una adolescente que busca su identidad en un mundo en crisis.",
        condition: "Nuevo",
        ubicacion: " Librería Kalma",
        publicationDate: "2005",
        publisher: "Norma",
        pages: 208
    },
    {
        title: "La Ciudad De Las Bestias",
        author: "Isabel Allende",
        genre: "Novela juvenil",
        language: "Español",
        price: 20000,
        format: "Físico",
        isbn: "978-84-663-3279-5",
        description: "Una novela de aventuras que sigue a dos niños que viajan a la selva amazónica.",
        condition: "Nuevo",
        ubicacion: " Librería Gato Gris",
        publicationDate: "2002",
        publisher: "Alfaguara",
        pages: 384
    },
    {
        title: "La biblioteca de los sueños olvidados",
        author: "Carlos Ruiz Zafón",
        genre: "Novela juvenil",
        language: "Español",
        price: 30000,
        format: "Físico",
        isbn: "978-84-663-3545-9",
        description: "Una novela de aventuras que sigue a dos niños que viajan a la selva amazónica.",
        condition: "Nuevo",
        ubicacion: " Librería Gato Gris",
        publicationDate: "2005",
        publisher: "Planeta",
        pages: 544
    },



];

const body = document.getElementById('body')

listBooks(libros)
function listBooks(books) {
    books.forEach(myBook => {
        createBook(myBook)
    });
}

function createBook(book) {
    const myBook = document.createElement('div')
    myBook.classList.add('book')

    const title = document.createElement('h2')
    title.textContent = book.title

    const author = document.createElement('p')
    author.textContent = book.author
    
    const genre = document.createElement('p')
    genre.textContent = book.genre

    const description = document.createElement('p')
    description.textContent = book.description

    myBook.appendChild(title)
    myBook.appendChild(author)
    myBook.appendChild(genre)
    myBook.appendChild(description)
    

    body.appendChild(myBook)

}

