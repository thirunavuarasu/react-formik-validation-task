// src/pages/Dashboard.js
import React from 'react';
import BookList from '../Components/BookList';
import AuthorList from '../Components/AuthorList';

const Dashboard = () => (
  <div>
    <h1>Library Management Dashboard</h1>
    <div>
      <h2>Books</h2>
      <BookList />
    </div>
    <div>
      <h2>Authors</h2>
      <AuthorList />
    </div>
  </div>
);

export default Dashboard;
