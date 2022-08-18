import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, retrieveBooks } from '../redux/books/books';

function Book(props) {
  const { title, author, id } = { ...props };
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(removeBook(id));
    dispatch(retrieveBooks());
  };
  return (
    <section className="book-wrapper">
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <button type="button" className="del-button" id={id} onClick={handleClick}>Remove</button>
    </section>
  );
}

export default Book;
