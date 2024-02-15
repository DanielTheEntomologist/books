'use strict';
{
  const select = {
    templateOf: { book: '#template-book' },
    book: {
      wrapper: '.books-panel',
      bookList: '.books-list',
      cover: '.book__image',
      image: '.book__image img',
    },
    filters: '.filters',
  };
  const templates = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };

  class Book {
    constructor(data, bookListElement) {
      const thisBook = this;
      thisBook.id = data.id;
      thisBook.name = data.name;
      thisBook.price = data.price;
      thisBook.rating = data.rating;
      thisBook.image = data.image;
      thisBook.details = data.details;
      thisBook.favorite = false;
      thisBook.filters = [];
      thisBook.dom = {};
      thisBook.render(bookListElement);
      thisBook.getElements();
    }

    render(bookListElement) {
      const thisBook = this;
      const generatedHTML = templates.book(thisBook);
      thisBook.dom.element = utils.createDOMFromHTML(generatedHTML);
      bookListElement.appendChild(thisBook.dom.element);
    }
    getElements() {
      const thisBook = this;
      thisBook.dom.cover = thisBook.dom.element.querySelector(
        select.book.cover
      );
      thisBook.dom.image = thisBook.dom.cover.querySelector(select.book.image);
    }

    toogleFavorite() {
      const thisBook = this;
      thisBook.favorite = !thisBook.favorite;
      if (thisBook.favorite) {
        thisBook.dom.cover.classList.add('favorite');
      } else {
        thisBook.dom.cover.classList.remove('favorite');
      }
    }
  }

  class BookList {
    constructor() {
      const thisBookList = this;
      thisBookList.favoriteBooks = [];

      thisBookList.getElements();

      thisBookList.createBooks();

      thisBookList.findFavorites();

      //   this.render();
      thisBookList.initActions();
    }
    getElements() {
      const thisBookList = this;
      thisBookList.dom = {};
      thisBookList.dom.wrapper = document.querySelector(select.book.wrapper);
      thisBookList.dom.bookList = thisBookList.dom.wrapper.querySelector(
        select.book.bookList
      );
      thisBookList.dom.filters = thisBookList.dom.wrapper.querySelector(
        select.filters
      );
    }

    createBooks() {
      const thisBookList = this;
      thisBookList.data = dataSource.books;
      thisBookList.books = {};
      for (let bookData of thisBookList.data) {
        const bookId = bookData.id;
        thisBookList.books[bookId] = new Book(
          bookData,
          thisBookList.dom.bookList
        );
      }
    }
    initActions() {
      const thisBookList = this;
      thisBookList.dom.bookList.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const clickedElement = event.target.offsetParent;
        if (clickedElement.classList.contains('book__image')) {
          thisBookList.toogleFavoriteBook(clickedElement);
        }
        thisBookList.findFavorites();
      });
    }
    toogleFavoriteBook(bookElement) {
      const thisBookList = this;
      // get book id from data-id attribute
      const id = bookElement.getAttribute('data-id');
      thisBookList.books[id].toogleFavorite();
    }
    findFavorites() {
      const thisBookList = this;

      thisBookList.favoriteBooks = [];
      for (let bookId in thisBookList.books) {
        const book = thisBookList.books[bookId];
        if (book.favorite) {
          thisBookList.favoriteBooks.push(book.id);
        }
      }
    }
  }

  const app = new BookList();
}
