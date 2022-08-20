import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, retrieveBooks } from '../redux/books/books';

function AddBookForm() {
  const [bookData, createBook] = useState({ title: '', author: '' });
  // const { titleEntry, authorEntry } = bookData;
  const newBook = (e) => (
    createBook({
      ...bookData,
      [e.target.name]: e.target.value,
    }));
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addBook({
      ...bookData,
      item_id: uuidv4(),
    }));
    dispatch(retrieveBooks());
    e.target.reset();
  };
  return (
    <div className="books-form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="form-styles">
        <input type="text" placeholder="Book Title" id="titleInput" required name="title" onChange={newBook} />
        <input type="text" id="authorInput" required name="author" placeholder="Author" onChange={newBook} />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
