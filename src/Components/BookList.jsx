// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../api/libraryService';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await getBooks();
    setBooks(response);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  const handleFormSubmit = async (values) => {
    if (editingBook) {
      await updateBook(editingBook.id, values);
    } else {
      await addBook(values);
    }
    setShowForm(false);
    fetchBooks();
  };

  const handleFormClose = () => {
    setShowForm(false);
    fetchBooks();
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Book</button>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {showForm && (
        <BookForm
          initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
          onSubmit={handleFormSubmit}
          onCancel={handleFormClose}
        />
      )}
    </div>
  );
};

export default BookList;
