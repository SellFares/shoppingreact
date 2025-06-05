// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs'; // This is our LandingPage
import './App.css';

function App() {
  return (
    <div>
      {/* No global header here, headers are inside ProductList and CartItem */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} /> {/* UPDATED from /productlist */}
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
