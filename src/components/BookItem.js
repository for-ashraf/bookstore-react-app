import React from 'react';
import './BookItem.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';


export default function BookItem(props) {
  const propsAr = props;
  const { id, title, author } = propsAr.book;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeBook(id));
 
  return (
    <li key={id} className="book-wrapper">
      <span className="title">{title}</span>
      <span className="author">{author}</span>
      <button type="button" className="del-button" id={id} onClick={handleClick}>Delete</button>
    </li>
  );
}
