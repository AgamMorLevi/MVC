'use strict'

function onInit() {
  render()
}

function render() {
  const elTbody = document.querySelector('tbody')
  const books = getBooks() //list of books
  var strHtmls = ''
  books.map((book) => {
    strHtmls += `
    <tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
            <button class="Read">Read</button>
            <button class ="Update" onclick="onUpdateBook('${book.id}')">Update</button>
             <button class="Delete" onclick="onRemoveBook('${book.id}')">Delete</button>
        </td>
    </tr>`
  })

  elTbody.innerHTML = strHtmls
}

function onRemoveBook(bookId) {
  removeBook(bookId)
  render()
}

function onUpdateBook(bookId) {
  var newPrice = +prompt('Enter new price for the book:')
  updatePrice(bookId, newPrice)
  render()
}

function onAddBook() {
  var newBook = prompt('Enter book title:')
  var newBookPrice = +prompt('Enter book price:')

  addBook(newBook, newBookPrice)
  render()
}
