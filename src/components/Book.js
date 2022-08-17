import React from 'react';
import { useDispatch } from 'react-redux';
import './BookItem.css';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = { ...props };
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeBook(id));
  return (
    <section className="book-wrapper">
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <button type="button" className="del-button" id={id} onClick={handleClick}>Remove</button>
    </section>
  );
}

export default Book;
