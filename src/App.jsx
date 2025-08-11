import React from 'react';
import ProductList from './ProductList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      {/* ProductList is the root component that handles both product view and cart view */}
      <ProductList />
    </div>
  );
}

export default App;
