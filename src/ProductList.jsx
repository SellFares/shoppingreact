import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const [addedToCart, setAddedToCart] = useState({});

  // Function to calculate total quantity of items in cart
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prev) => ({ ...prev, [product.name]: true }));
  };

  // Example plantsArray already in your file
  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { name: "Snake Plant", image: "/snake.png", description: "Improves air quality", cost: "$15" },
        { name: "Spider Plant", image: "/spider.png", description: "Removes toxins", cost: "$12" },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "/lavender.png", description: "Calming scent", cost: "$20" },
        { name: "Jasmine", image: "/jasmine.png", description: "Promotes relaxation", cost: "$18" },
      ],
    },
  ];

  return (
    <div className="product-grid">
      <h2>Total Items in Cart: {calculateTotalQuantity()}</h2>

      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1 className="plant_heading">{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, idx) => (
              <div className="product-card" key={idx}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">{plant.cost}</div>

                <button
                  className={`product-button ${addedToCart[plant.name] ? "added-to-cart" : ""}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
