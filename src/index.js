import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // use provider from redux to accsess store in all parts aplications
  //use BrowsweRouter for routing
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />

    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


