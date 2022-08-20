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
    <div className="single-book">
      <div className="single-book-div1">
        <p className="genre">Educational</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="single-book-options">
          <p>Comments</p>
          <button className="delete-btn" type="button" id={id} onClick={handleClick}>
            Remove
          </button>
          <p>Edit</p>
        </div>
      </div>
      <div className="container">
        <div className="circular-progress circular-progress-1">
          <span className="progress-value">17%</span>
        </div>
      </div>
      <div className="update-div">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
