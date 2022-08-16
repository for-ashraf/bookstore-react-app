import Book from '../../components/BookItem';

// Actions
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADDBOOK: return [
      ...state,
      Book,
    ];
    case REMOVEBOOK: return state.filter((book) => (book.id !== action.book.id));
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADDBOOK, book };
}

export function removeBook(book) {
  return { type: REMOVEBOOK, book };
}
