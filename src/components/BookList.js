import React from 'react';
import BookItem from './BookItem';
import BookForm from './BookForm';

export default function BookList(props) {
  const state = useSelector((state) => state.booksReducer);
  return (
    <>
    <ul className="books-list">
      {state.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
    <BookForm />
    </>
  );
}
