// ProductList.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items || []);

  // --- Plant Categories and Products ---
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
      ],
    },
  ];

  // Helper to check if product is already in cart
  const isInCart = (productName) =>
    cart.some((item) => item.name === productName);

  // compute total quantity for badge
  const totalCartQuantity = cart.reduce((sum, i) => sum + (i.quantity || 0), 0);

  // handlers
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
  };

  const handleCartClick = (e) => {
    e && e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e && e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e && e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    // dispatch addItem (CartSlice will add or increment)
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className="navbar"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
      >
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <a
            href="#"
            onClick={handlePlantsClick}
            style={{ color: "white", fontSize: "30px", textDecoration: "none" }}
          >
            Plants
          </a>
          <a
            href="#"
            onClick={handleCartClick}
            style={{
              color: "white",
              fontSize: "30px",
              textDecoration: "none",
              position: "relative",
            }}
          >
            🛒
            <span
              className="cart_quantity_count"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "14px",
              }}
            >
              {totalCartQuantity}
            </span>
          </a>
        </div>
      </div>

      {/* Page Content */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, i) => (
            <div key={i} className="plant-category">
              <h2 className="plant_heading">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant, j) => (
                  <div key={j} className="product-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                    <h3 className="product-title">{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price">{plant.cost}</p>
                    <button
                      className={`product-button ${
                        isInCart(plant.name) ? "added-to-cart" : ""
                      }`}
                      disabled={isInCart(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {isInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
