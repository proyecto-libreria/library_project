import { books } from './books.js'

const body = document.getElementById('body')

const newBook = document.getElementById('btn-add-book')
const title = document.getElementById('title')
const author = document.getElementById('author')
const gender = document.getElementById('gender') 
const language = document.getElementById('language') 
const price = document.getElementById('price') 
const format = document.getElementById('format') 
const isbn = document.getElementById('isbn') 
const description = document.getElementById('description') 
const condition = document.getElementById('condition') 
const address = document.getElementById('address') 
const publicationDate = document.getElementById('publicationDate') 
const publisher = document.getElementById('publisher') 
const pages = document.getElementById('pages') 
const add = document.getElementById('btn-add').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex'

})
const close = document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none'
})




newBook.addEventListener('click', () => {
    const book = {
        title: title.value,
        author: author.value,
        gender: gender.value,
        language: language.value,
        price: price.value,
        format: format.value,
        isbn: isbn.value,
        description: description.value,
        condition: condition.value,
        address: address.value,
        publicationDate: publicationDate.value,
        publisher: publisher.value,
        pages: pages.value
    }
    books.push(book)
    console.log(books)
})

listBooks(books)
function listBooks(books) {
    books.forEach(myBook => {
        createBook(myBook)
    });
}



const containerBooks = document.getElementById('container-cards')
const filterGender = document.getElementById('select-gender').addEventListener('change', filterToGender)
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks)

window.addEventListener('DOMContentLoaded', generateCard)

function generateCard() {  
  books.forEach( book => makeCard(book) )
}

function makeCard(book) {
  // Crear elementos de la card
  let bookCard = document.createElement('div')
  bookCard.classList.add('book')

  let bookPhoto = document.createElement('div')
  bookPhoto.classList.add('book-photo')

  let imgBook = document.createElement('img')
  imgBook.src = book.image
  imgBook.alt = book.title

  let descriptionBook = document.createElement('div')
  descriptionBook.classList.add('book-description')

  let titleBook = document.createElement('h2')
  titleBook.textContent = book.title

  let priceBook = document.createElement('h3')
  priceBook.textContent = `${book.price}$`

  let btnBuy = document.createElement('button')
  btnBuy.textContent = 'Comprar'

  bookPhoto.appendChild(imgBook)
  
  descriptionBook.appendChild(titleBook)
  descriptionBook.appendChild(priceBook)
  descriptionBook.appendChild(btnBuy)
  
  bookCard.appendChild(bookPhoto)
  bookCard.appendChild(descriptionBook)

  containerBooks.appendChild(bookCard)
  return bookCard;
}

function filterToGender (event) {     
  containerBooks.innerHTML = ''
  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.gender === event.target.value ) {
        makeCard(book)
      }
    })
  }  
}

function sortedBooks() {
  containerBooks.innerHTML = ''
  // Usamos sort() con una función de comparación
  books.sort((a, b) => {
    // Comparamos los títulos de los libros, en minúsculas para ser case-insensitive
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();
    
    if (titleA < titleB) {
      return -1; // a debe venir antes que b
    }
    if (titleA > titleB) {
      return 1; // b debe venir antes que a
    }
    return 0; // son iguales
  });
  generateCard()
  return books; // Devolvemos el array de libros ordenado
}

