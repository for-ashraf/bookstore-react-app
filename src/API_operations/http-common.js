import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Kc99sUaGQaeXTp0jY9Zy/books',
  headers: {
    'Content-type': 'application/json',
  },
});
