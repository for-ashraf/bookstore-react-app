import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BooksList';
import Categories from './components/Categories';
import { retrieveBooks } from './redux/books/books';
import Form from './components/AddBookForm';
import Navbar from './components/Navbar';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  });
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
      <Form />
    </div>
  );
}
