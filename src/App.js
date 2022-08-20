import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import BookList from './components/BooksList';
import Categories from './components/Categories';
import { retrieveBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
