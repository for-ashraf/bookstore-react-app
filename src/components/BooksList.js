import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const booksList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  return (
    <ul className="books-list">
      {booksList.map((book) => (
        <li key={uuidv4()}>
          <Book key={uuidv4()} title={book.title} author={book.author} id={book.id} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
