import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Navbar from './components/Navbar';
import bookStore from './redux/configureStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={bookStore}>
    <HashRouter>
    <Navbar />
      <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
);
