'use strict'

const STORAGE_KEY = 'books'

var gBooks = []
_createBooks()

function getBooks() {
  return gBooks
}

function removeBook(bookId) {
  gBooks = gBooks.filter((book) => book.id !== bookId)
  _saveBooks()
}

function updatePrice(bookId, newPrice) {
  var book = gBooks.find((book) => book.id === bookId)
  if (book) {
    book.price = newPrice
  }
  _saveBooks()
}

function addBook(newBook, price) {
  var addedBook = _createBook(newBook, price)
  gBooks.push(addedBook)
  _saveBooks()
}

function _createBooks() {
  gBooks = loadFromStorage(STORAGE_KEY)
  if (gBooks && gBooks.length > 0) return

  gBooks = [
    _createBook('The adventures of Lori Ipsi', 120),
    _createBook('World Atlas', 300),
    _createBook('Zorba the Greek', 87),
  ]
  _saveBooks()
}

function _createBook(bookName, bookPrice) {
  return {
    id: makeId(),
    title: bookName,
    price: bookPrice,
    imgUrl: bookName + '.jpg',
  }
}

function _saveBooks() {
  saveToStorage(STORAGE_KEY, gBooks)
}
