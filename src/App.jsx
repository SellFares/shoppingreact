import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="tag">
          <Link to="/" className="tag_home_link">
            <h3>Home</h3>
          </Link>
        </div>
        <div className="luxury">Plant Shopping Cart</div>
        <div className="cart">
          <Link to="/cart" className="tag_home_link">
            <h3>Cart</h3>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
