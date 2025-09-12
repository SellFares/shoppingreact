import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';

const App = () => {
  const [showCart, setShowCart] = useState(false); // View toggle

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: '#e3f2e1',
        }}
      >
        <h1>🌿 Plant Shop</h1>
        <button
          onClick={handleViewCart}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          🛒 View Cart
        </button>
      </header>

      <main>
        {showCart ? (
          <CartItem onContinueShopping={handleContinueShopping} />
        ) : (
          <ProductList />
        )}
      </main>
    </div>
  );
};

export default App;