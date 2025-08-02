import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      name: 'Snake Plant',
      category: 'Indoor',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg',
      description: 'Low maintenance and perfect for beginners.',
      cost: '$10.99'
    },
    {
      name: 'Peace Lily',
      category: 'Indoor',
      image: 'https://images.pexels.com/photos/450301/pexels-photo-450301.jpeg',
      description: 'Beautiful white flowers and air purifying.',
      cost: '$12.99'
    },
    {
      name: 'Aloe Vera',
      category: 'Succulent',
      image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
      description: 'Medicinal plant with soothing gel.',
      cost: '$9.49'
    },
    {
      name: 'Spider Plant',
      category: 'Indoor',
      image: 'https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg',
      description: 'Easy to grow and clean the air.',
      cost: '$7.99'
    },
    {
      name: 'Jade Plant',
      category: 'Succulent',
      image: 'https://images.pexels.com/photos/64773/pexels-photo-64773.jpeg',
      description: 'A symbol of good luck and prosperity.',
      cost: '$8.99'
    },
    {
      name: 'Boston Fern',
      category: 'Outdoor',
      image: 'https://images.pexels.com/photos/1393068/pexels-photo-1393068.jpeg',
      description: 'Great for hanging baskets and patios.',
      cost: '$11.49'
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      <div className="product-list">
        {plantsArray.map((plant, index) => (
          <div className="product-card" key={index}>
            <img src={plant.image} alt={plant.name} className="product-image" />
            <h3 className="product-title">{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="product-price">{plant.cost}</p>
            <button
              className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
