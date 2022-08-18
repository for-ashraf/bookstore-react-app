import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rvgpTgY1WA7jwYoQNfGQ/books',
  headers: {
    'Content-type': 'application/json',
  },
});
