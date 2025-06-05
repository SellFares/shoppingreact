// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your global base styles (ensure this file exists or remove if not used)

// Import Provider from react-redux to make the store available to your app
import { Provider } from 'react-redux';
// Import your configured Redux store
import store from './store.js'; // Assumes store.js is in the src/ directory

// Import BrowserRouter for routing capabilities
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter should wrap components that need routing capabilities */}
    <BrowserRouter>
      {/* Provider makes the Redux store available to any nested components */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
