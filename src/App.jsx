import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import AboutUs     from './AboutUs.jsx';
import CartItem    from './CartItem.jsx';
import './App.css';

function App() {
  const [view, setView] = useState('landing');

  const goHome    = () => setView('landing');
  const goShop    = () => setView('products');
  const goCart    = () => setView('cart');

  return (
    <div className="app-container">
      {/* optional nav */}
      <div className="nav-bar">
        <button onClick={goHome}>Home</button>
        <button onClick={goShop}>Products</button>
        <button onClick={goCart}>Cart</button>
      </div>

      {view === 'landing' && (
        <div className="landing-page">
          <div className="background-image" />
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={goShop}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {view === 'products' && (
        <ProductList onHomeClick={goHome} onCartClick={goCart} />
      )}

      {view === 'cart' && (
        <CartItem onContinueShopping={goShop} />
      )}
    </div>
  );
}

export default App;
