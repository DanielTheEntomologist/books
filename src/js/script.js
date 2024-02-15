'use strict';
{
  const select = {
    templateOf: { book: '#template-book' },
    book: {
      wrapper: '.books-panel',
      bookList: '.books-list',
      cover: '.book__image',
    },
    filters: '.filters',
  };
  const templates = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };

  const renderBooks = function (books) {
    const bookList = document.querySelector(select.book.bookList);

    for (let book of books) {
      const generatedHTML = templates.book(book);
      const bookElement = utils.createDOMFromHTML(generatedHTML);
      bookList.appendChild(bookElement);
    }
  };

  const toggleFavoriteBook = function (bookElement) {
    // get book id from data-id attribute
    const id = bookElement.getAttribute('data-id');
    if (bookElement.classList.contains('favorite')) {
      bookElement.classList.remove('favorite');
      const index = favoriteBooks.indexOf(id);
      favoriteBooks.splice(index, 1);
    } else {
      bookElement.classList.add('favorite');
      favoriteBooks.push(id);
    }
  };

  const initActions = function () {
    // add event listener to book list wrapper
    const bookList = document.querySelector(select.book.wrapper);
    bookList.addEventListener('dblclick', function (event) {
      event.preventDefault();
      const clickedElement = event.target.offsetParent;
      if (clickedElement.classList.contains('book__image')) {
        toggleFavoriteBook(clickedElement);
      }
    });
  };

  const favoriteBooks = [];

  const app = {
    init: function () {
      renderBooks(dataSource.books);
      initActions();
    },
  };

  app.init();
}
