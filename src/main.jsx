import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your global CSS file, if you have one

// Import Provider from react-redux to make the store available to your app
import { Provider } from 'react-redux';
// Import your configured Redux store
import store from './store.js'; // This assumes store.js is in the src/ directory

// Import BrowserRouter for routing capabilities
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter should wrap components that need routing capabilities */}
    <BrowserRouter>
      {/* Provider makes the Redux store available to any nested components that have been wrapped in connect() or use useSelector/useDispatch */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
