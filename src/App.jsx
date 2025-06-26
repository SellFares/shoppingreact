import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import Header from './Header';

function App() {
  const [page, setPage] = useState('landing'); // landing, products, about, cart

  const handleNavigate = (to) => {
    if (to === 'home') setPage('landing');
    else setPage(to);
  };

  const handleCartClick = () => setPage('cart');

  return (
    <div className="app-container">
      {page !== 'landing' && (
        <Header
          onNavigate={handleNavigate}
          onCartClick={handleCartClick}
          currentPage={page}
        />
      )}
      {page === 'landing' && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={() => setPage('products')}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}
      {page === 'products' && (
        <div className="product-list-container visible">
          <ProductList onHomeClick={() => setPage('landing')} onCartClick={handleCartClick} />
        </div>
      )}
      {page === 'about' && (
        <div className="product-list-container visible">
          <AboutUs />
        </div>
      )}
      {page === 'cart' && (
        <div className="product-list-container visible">
          <ProductList showCartOnly onHomeClick={() => setPage('landing')} />
        </div>
      )}
    </div>
  );
}

export default App;



