import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css';

const Header = ({ onNavigate, onCartClick, currentPage }) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCartQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="navbar">
      <div style={{ fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
        Paradise Nursery
      </div>
      <div className="ul">
        <div><a href="#" onClick={() => onNavigate('about')}>About Us</a></div>
        <div><a href="#" onClick={() => onNavigate('products')}>Plants</a></div>
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={onCartClick}>
          <span className='cart' role="img" aria-label="cart" style={{ fontSize: '2rem' }}>🛒</span>
          <span className="cart_quantity_count" style={{ position: 'absolute', top: -8, right: -8, background: 'red', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '1rem' }}>{totalCartQuantity}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
