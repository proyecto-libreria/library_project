import { books } from './books.js'

const containerBooks = document.getElementById('container-cards')
const filterGender = document.getElementById('select-gender').addEventListener('change', filterToGender)
const filterLanguages = document.getElementById('select-language').addEventListener('change', filterToLanguage)
const filterPublisher = document.getElementById('select-editorial').addEventListener('change', filterToPublisher)
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks)
const filterPages = document.getElementById('btn-pages').addEventListener('click', bookspages)
const filterPrice =  document.getElementById('btn-prices').addEventListener('click', filterToPrices)
const showExpensiveBooks = document.getElementById('btn-expensiveBooks').addEventListener('click', expensiveBooks)
const ReadersDays =  document.getElementById('Readers-Day').addEventListener('click', ReadersDay)


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

  let bookAuthor = document.createElement('h3')
  bookAuthor.textContent = `Autor: ${book.author}`
  bookAuthor.classList.add('authorBook')

  let bookDescription = document.createElement('p')
  bookDescription.textContent = book.description
  bookDescription.classList.add('description')

  let pagesBook = document.createElement('h3')
  pagesBook.textContent = `Paginas: ${book.pages}`

  let priceBook = document.createElement('h3')
  priceBook.textContent = `${book.price}COP`

  let btnBuy = document.createElement('button')
  btnBuy.textContent = 'Comprar'

  btnBuy.addEventListener('click', function() {
    window.location.href = 'login.html'; 
  });

  bookPhoto.appendChild(imgBook)
  
  descriptionBook.appendChild(titleBook)
  descriptionBook.appendChild(bookAuthor)
  descriptionBook.appendChild(bookDescription)
  descriptionBook.appendChild(pagesBook)
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
  
    let bookAuthor =  document.createElement('h3')
    bookAuthor.textContent = book.author

    let priceBook = document.createElement('h3')
    priceBook.textContent = `${book.price}COP`
  
    let btnBuy = document.createElement('button')
    btnBuy.textContent = 'Comprar'

    btnBuy.addEventListener('click', function() {
      window.location.href = 'login.html'; 
    });
  
    bookPhoto.appendChild(imgBook)
    
    descriptionBook.appendChild(titleBook)
    descriptionBook.appendChild(bookAuthor)
    descriptionBook.appendChild(priceBook)
    descriptionBook.appendChild(btnBuy)
    
    
    bookCard.appendChild(bookPhoto)
    bookCard.appendChild(descriptionBook)
  
    containerBooks.appendChild(bookCard)
    return bookCard;
  }

  



}

function filterToLanguage (event) {     
  containerBooks.innerHTML = ''
  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.language === event.target.value ) {
        makeCard(book)
      }
    })
  } 
}

function filterToPublisher (event) {     
  containerBooks.innerHTML = ''
  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.editorial === event.target.value ) {
        makeCard(book)
      }
    })
  } 
}

function expensiveBooks() {
  containerBooks.innerHTML = ''

  const expensiveBooks = books.sort((a, b) => b.price - a.price).slice(0, 5)

  expensiveBooks.forEach(book => {
    makeCard(book)
  })

  return books;
}

function ReadersDay() {
    containerBooks.innerHTML = ''

    books.forEach( books => {
      makeCard(books)
    })
    
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
    
      let bookAuthor = document.createElement('h3')
      bookAuthor.textContent = `Autor: ${book.author}`
      bookAuthor.classList.add('authorBook')
    
      let bookDescription = document.createElement('p')
      bookDescription.textContent = book.description
      bookDescription.classList.add('description')
    
      let pagesBook = document.createElement('h3')
      pagesBook.textContent = `Paginas: ${book.pages}`

      let normalPriceBook = document.createElement('h3')
      normalPriceBook.textContent = `Precio normal: ${book.price}COP`
      normalPriceBook.classList.add('normalPrice')
    
      let priceBook = document.createElement('h3')
      priceBook.textContent = `Ahora: ${book.price * 0.90}COP`
    
      let btnBuy = document.createElement('button')
      btnBuy.textContent = 'Comprar'
    
      btnBuy.addEventListener('click', function() {
        window.location.href = 'login.html'; 
      });
    
      bookPhoto.appendChild(imgBook)
      
      descriptionBook.appendChild(titleBook)
      descriptionBook.appendChild(bookAuthor)
      descriptionBook.appendChild(bookDescription)
      descriptionBook.appendChild(pagesBook)
      descriptionBook.appendChild(normalPriceBook)
      descriptionBook.appendChild(priceBook)
      descriptionBook.appendChild(btnBuy)
      
      bookCard.appendChild(bookPhoto)
      bookCard.appendChild(descriptionBook)
    
      containerBooks.appendChild(bookCard)
      return bookCard;
    }
}

function filterToPrices() {
  containerBooks.innerHTML = ''

  books.forEach( book => {
    if (book.price >= 30000 && book.price <= 80000 ) {
      makeCard(book)
    }
  })

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
  
    let bookAuthor =  document.createElement('h3')
    bookAuthor.textContent = `Autor: ${book.author}`
    

    let priceBook = document.createElement('h3')
    priceBook.textContent = `${book.price}COP`
  
    let btnBuy = document.createElement('button')
    btnBuy.textContent = 'Comprar'
    btnBuy.addEventListener('click', function() {
      window.location.href = 'login.html'; 
    });
  
    bookPhoto.appendChild(imgBook)
    
    descriptionBook.appendChild(titleBook)
    descriptionBook.appendChild(bookAuthor)
    descriptionBook.appendChild(priceBook)
    descriptionBook.appendChild(btnBuy)
    
    
    bookCard.appendChild(bookPhoto)
    bookCard.appendChild(descriptionBook)
  
    containerBooks.appendChild(bookCard)
    return bookCard;
  }

}

function bookspages() {

  containerBooks.innerHTML = ''

  books.forEach( book => {
    if (book.pages >= 200 ) {
      makeCard(book)
    }
  })
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
  
    let bookAuthor =  document.createElement('h3')
    bookAuthor.textContent = `Autor: ${book.author}`

    let priceBook = document.createElement('h3')
    priceBook.textContent = `${book.price}COP`
  
    let btnBuy = document.createElement('button')
    btnBuy.textContent = 'Comprar'
    btnBuy.addEventListener('click', function() {
      window.location.href = 'login.html'; 
    });
  


    bookPhoto.appendChild(imgBook)
    
    descriptionBook.appendChild(titleBook)
    descriptionBook.appendChild(bookAuthor)
    descriptionBook.appendChild(priceBook)
    descriptionBook.appendChild(btnBuy)
    
    
    bookCard.appendChild(bookPhoto)
    bookCard.appendChild(descriptionBook)
  
    containerBooks.appendChild(bookCard)
    return bookCard;
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

