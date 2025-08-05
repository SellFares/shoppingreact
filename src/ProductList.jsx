import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice'; // Adjust path as needed
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    // Implement cart display logic here if needed
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
        // Add more plants here...
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        }
        // Add more plants here...
      ]
    }
    // Add more categories here...
  ];

  return (
    <div>
      <div className="navbar">
        <div className="logo-section">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <a href="/" onClick={handleHomeClick}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div className="nav-links">
          <a href="#" onClick={() => {}}>Plants</a>
          <a href="#" onClick={handleCartClick}>Cart 🛒</a>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;


