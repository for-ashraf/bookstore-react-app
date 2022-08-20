import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { removeBook, retrieveBooks } from '../redux/books/books';
import './BookItem.css';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} size={"80px"} />;
  /* eslint-enable */
}

export function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(30 + (Math.floor(Math.random() * 10)));
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

function Book(props) {
  const { title, author, id } = { ...props };
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(removeBook(id));
    dispatch(retrieveBooks());
  };
  return (
    <li className="book-wrapper" id={id}>
      <div className="left-container">
        <div className="book-group">
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="button-group">
          <button type="button" className="com-button" disabled>
            Comments
          </button>
          <button
            id={id}
            className="del-button"
            onClick={handleClick}
            type="button"
          >
            Remove
          </button>
          <button type="button" className="edit-button" disabled>
            Edit
          </button>
        </div>
      </div>
      <div className="middle-container">
        <CircularStatic />
        <div className="completed-progress">
          <span className="percentage">
            {Math.floor(Math.random() * 101)}
            %
          </span>
          <span className="text-complete">Completed</span>
        </div>
      </div>
      <div className="right-container">
        <span className="current-chapter">Current Chapter</span>
        <span className="chapter">
          Chapter
          {' '}
          {Math.floor(Math.random() * 101)}
        </span>
        <button type="button" className="progress-button" disabled>
          Update Progress
        </button>
      </div>
    </li>
  );
}

export default Book;
