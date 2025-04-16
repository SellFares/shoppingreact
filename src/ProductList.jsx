import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.js';
import './ProductList.css';

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(s => s.cart.items);
  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const [added, setAdded] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const plantsArray = [ /* your categories here */ ];

  useEffect(() => {
    const onScroll = () => {
      const sec = document.getElementById('category-1');
      if (sec && window.scrollY > sec.offsetTop + sec.offsetHeight) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAdd = plant => {
    dispatch(addItem(plant));
    setAdded(a => ({ ...a, [plant.name]: true }));
  };

  const handleCategoryChange = e => {
    const el = document.getElementById(e.target.value);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="product-list-container">
      <div className="product-header">
        <button onClick={onHomeClick}>← Home</button>
        <button onClick={onCartClick}>🛒 {totalCount}</button>
      </div>

      <select onChange={handleCategoryChange} className="category-picker">
        <option value="">Select Category</option>
        {plantsArray.map((cat, i) => (
          <option key={i} value={`category-${i}`}>
            {cat.category}
          </option>
        ))}
      </select>

      {plantsArray.map((cat, ci) => (
        <section id={`category-${ci}`} key={ci}>
          <h2>{cat.category}</h2>
          <div className="product-grid">
            {cat.plants.map((p, idx) => (
              <div className="product-card" key={idx}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p className="product-price">{p.cost}</p>
                <button
                  disabled={!!added[p.name]}
                  onClick={() => handleAdd(p)}
                >
                  {added[p.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ProductList;
