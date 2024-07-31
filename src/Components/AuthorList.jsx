// src/components/AuthorList.js
import React, { useState, useEffect } from 'react';
import { getAuthors, deleteAuthor } from '../api/libraryService';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const response = await getAuthors();
    setAuthors(response);
  };

  const handleDelete = async (id) => {
    await deleteAuthor(id);
    fetchAuthors();
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingAuthor(null);
    setShowForm(true);
  };

  const handleFormSubmit = async (values) => {
    if (editingAuthor) {
      await updateAuthor(editingAuthor.id, values);
    } else {
      await addAuthor(values);
    }
    setShowForm(false);
    fetchAuthors();
  };

  const handleFormClose = () => {
    setShowForm(false);
    fetchAuthors();
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Author</button>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.name} - {author.biography}
            <button onClick={() => handleEdit(author)}>Edit</button>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {showForm && (
        <AuthorForm
          initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
          onSubmit={handleFormSubmit}
          onCancel={handleFormClose}
        />
      )}
    </div>
  );
};

export default AuthorList;
