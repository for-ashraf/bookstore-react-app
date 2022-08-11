import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

export default function Bookstore() {
  const books = [{
    id: 1,
    title: 'First Book',
    author: 'First Author',
  },
  {
    id: 2,
    title: 'Second Book',
    author: 'Second Author',
  }];
  return (
    <div className="books-container">
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
