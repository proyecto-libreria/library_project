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
const searchTitle = document.getElementById('select-title').addEventListener('click', searchToTitle)
const searchAuthor =  document.getElementById('select-author').addEventListener('click', searchToAuthor)
const searchPrices = document.getElementById('select-price').addEventListener('click', searchToPrice)
const filterStock =  document.getElementById('filter-stock').addEventListener('click', filterToStock)

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

    let publisherSpan = document.createElement('span');
    publisherSpan.textContent = book.editorial;
    publisherSpan.classList.add('publisher');

    let editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit-button');

    let isEditing = false; // Variable para tracking si se está editando

    editButton.addEventListener('click', function() {
      if (!isEditing) { // Si no se está editando, permitir editar
        isEditing = true; // Marcar como editando
        editButton.disabled = true; // Deshabilitar botón "Editar"

        // Mostrar formulario para editar el valor
        let editForm = document.createElement('div');
        editForm.classList.add('edit-form');

        let editInput = document.createElement('input');
        editInput.classList.add('input-edit')
        editInput.type = 'text';
        editInput.value = book.editorial;

        let saveButton = document.createElement('button');
        saveButton.textContent = '✓';
        saveButton.classList.add('btn-save')

        saveButton.addEventListener('click', function() {
          // Guardar el valor editado en el objeto book
          book.editorial = editInput.value;
          publisherSpan.textContent = book.editorial;
          editForm.remove(); // Ocultar formulario
          isEditing = false; // Marcar como no editando
          editButton.disabled = false; // Habilitar botón "Editar" nuevamente
        });

        editForm.appendChild(editInput);
        editForm.appendChild(saveButton);
        descriptionBook.appendChild(editForm);
      }
    });

              

  let bookAuthor = document.createElement('h3')
  bookAuthor.textContent = `Autor: ${book.author}`
  bookAuthor.classList.add('authorBook')

        let stockSpan = document.createElement('span');
        stockSpan.classList.add('stock');

        if (book.stock === 1) {
          stockSpan.textContent = 'En stock';
        } else if (book.stock === 0) {
          stockSpan.textContent = 'Agotado';
        } else {
          stockSpan.textContent = `Disponible (${book.stock})`;
        }

        let incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.classList.add('increment-button');

        let decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.classList.add('decrement-button');

        incrementButton.addEventListener('click', function() {
          book.stock++;
          updateStockSpan(book, stockSpan);
        });

        decrementButton.addEventListener('click', function() {
          if (book.stock > 0) {
            book.stock--;
            updateStockSpan(book, stockSpan);
          }
        });

        

        // ...

        function updateStockSpan(book, stockSpan) {
          if (book.stock === 1) {
            stockSpan.textContent = 'En stock';
          } else if (book.stock === 0) {
            stockSpan.textContent = 'Agotado';
          } else {
            stockSpan.textContent = `Disponible (${book.stock})`;
          }
        }


  let bookDescription = document.createElement('p')
  bookDescription.textContent = book.description
  bookDescription.classList.add('description')

  let pagesBook = document.createElement('h3')
  pagesBook.textContent = `Paginas: ${book.pages}`

  let priceBook = document.createElement('h3')
  priceBook.textContent = `${book.price}COP`

  let btnBuy = document.createElement('button')
  btnBuy.textContent = 'Comprar'
  btnBuy.classList.add('btn-buy')

  btnBuy.addEventListener('click', function() {
    window.location.href = 'login.html'; 
  });



  let btnDelete = document.createElement('button')
  btnDelete.textContent = 'eliminar libro'
  btnDelete.classList.add('btn-buy')

  btnDelete.addEventListener('click', function() {
    // Eliminar el libro del arreglo 'books'
    const bookIndex = books.findIndex(libreriaBook => libreriaBook.title === book.title); // propiedad única del libro
    books.splice(bookIndex, 1);
    // Actualizar la página para reflejar el cambio
    containerBooks.innerHTML = ''; // Borrar todas las tarjetas existentes
    generateCard(); // Volver a generar las tarjetas con los libros actualizados
  });

  bookPhoto.appendChild(imgBook)
  
  descriptionBook.appendChild(titleBook)
  descriptionBook.appendChild(bookAuthor)
  descriptionBook.appendChild(bookDescription)
  descriptionBook.appendChild(pagesBook)
  descriptionBook.appendChild(priceBook)
  descriptionBook.appendChild(publisherSpan);
  descriptionBook.appendChild(stockSpan);
  descriptionBook.appendChild(incrementButton); 
  descriptionBook.appendChild(decrementButton);
  descriptionBook.appendChild(editButton);
  descriptionBook.appendChild(btnBuy);
  descriptionBook.appendChild(btnDelete)
  
  bookCard.appendChild(bookPhoto)
  bookCard.appendChild(descriptionBook)

  containerBooks.appendChild(bookCard)
  return bookCard;
} 

function filterToStock(event) {
  containerBooks.innerHTML = '';

  if (event.target.value === 'everything') {
    generateCard();
  } else if (event.target.value === 'inStock') {
    books.forEach(book => {
      if (book.stock === 1) {
        makeCard(book);
      }
    });
  } else if (event.target.value === 'outOfStock') {
    books.forEach(book => {
      if (book.stock === 0) {
        makeCard(book);
      }
    });
  }
}



function searchToAuthor(event) {
  containerBooks.innerHTML = ''

  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.author === event.target.value ) {
        makeCard(book)
      }
    })
  }  


}

function searchToPrice(event) {
  
  containerBooks.innerHTML = ''

  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.price === event.target.value ) {
        makeCard(book)
      }
    })
  }  
}




function searchToTitle(event) {
  containerBooks.innerHTML = ''

  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    books.forEach( book => {
      if (book.title === event.target.value ) {
        makeCard(book)
      }
    })
  }  
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
      let publisherSpan = document.createElement('span');
    publisherSpan.textContent = book.editorial;
    publisherSpan.classList.add('publisher');

    let editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit-button');

    let isEditing = false; // Variable para tracking si se está editando

    editButton.addEventListener('click', function() {
      if (!isEditing) { // Si no se está editando, permitir editar
        isEditing = true; // Marcar como editando
        editButton.disabled = true; // Deshabilitar botón "Editar"

        // Mostrar formulario para editar el valor
        let editForm = document.createElement('div');
        editForm.classList.add('edit-form');

        let editInput = document.createElement('input');
        editInput.classList.add('input-edit')
        editInput.type = 'text';
        editInput.value = book.editorial;

        let saveButton = document.createElement('button');
        saveButton.textContent = '✓';
        saveButton.classList.add('btn-save')

        saveButton.addEventListener('click', function() {
          // Guardar el valor editado en el objeto book
          book.editorial = editInput.value;
          publisherSpan.textContent = book.editorial;
          editForm.remove(); // Ocultar formulario
          isEditing = false; // Marcar como no editando
          editButton.disabled = false; // Habilitar botón "Editar" nuevamente
        });

        editForm.appendChild(editInput);
        editForm.appendChild(saveButton);
        descriptionBook.appendChild(editForm);
      }
    });

      let normalPriceBook = document.createElement('h3')
      normalPriceBook.innerHTML = `Precio normal: <del>${book.price}</del>COP`;
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
      descriptionBook.appendChild(publisherSpan); 
      descriptionBook.appendChild(normalPriceBook)
      descriptionBook.appendChild(priceBook)
      descriptionBook.appendChild(editButton);
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

    let pages =  document.createElement('h3')
    pages.textContent =  `paginas: ${book.pages}`
  
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
    descriptionBook.appendChild(pages)
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

