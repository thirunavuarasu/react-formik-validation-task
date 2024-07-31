// src/api/libraryService.js
let books = [];
let authors = [];

export const getBooks = () => Promise.resolve(books);
export const getAuthors = () => Promise.resolve(authors);
export const addBook = (book) => {
  books.push(book);
  return Promise.resolve(book);
};
export const updateBook = (id, updatedBook) => {
  books = books.map(book => (book.id === id ? updatedBook : book));
  return Promise.resolve(updatedBook);
};
export const deleteBook = (id) => {
  books = books.filter(book => book.id !== id);
  return Promise.resolve();
};

export const addAuthor = (author) => {
  authors.push(author);
  return Promise.resolve(author);
};
export const updateAuthor = (id, updatedAuthor) => {
  authors = authors.map(author => (author.id === id ? updatedAuthor : author));
  return Promise.resolve(updatedAuthor);
};
export const deleteAuthor = (id) => {
  authors = authors.filter(author => author.id !== id);
  return Promise.resolve();
};
