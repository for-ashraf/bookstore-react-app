import React from 'react';

export default function BookForm() {
  const [bookData, createBook] = useState({ title: '', author: '' });
  const newBook = (e) => (
    createBook({
      ...bookData,
      [e.target.name]: e.target.value,
    }));
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...bookData,
      id: uuidv4(),
    }));
    e.target.reset();
  };
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-title"
        placeholder="Book Title"
        name="title"
      />
      <input
        type="text"
        className="input-author"
        placeholder="Author"
        name="author"
      />
      <button type="submit" className="input-submit">
        Add Book
      </button>
    </form>
  );
}
