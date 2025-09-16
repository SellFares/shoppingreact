"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../src/CartSlice";
import "./CartItem.css";

export default function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalCost = (item) => {
  const price = parseFloat(item.cost.replace('$', '')); // remove $ and convert
  return price * item.quantity;
};

// And same for total amount:
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return total + price * item.quantity;
  }, 0);
};


  const handleContinueShopping = (e) => {
    if (onContinueShopping) onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert("Checkout functionality to be implemented");
  };

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {/* Total amount at the top */}
          <div className="total_cart_amount">
            Total Amount: ${calculateTotalAmount()}
          </div>

          {/* Cart Items */}
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.name} className="cart-item">
                {/* Left - Image */}
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Right - Details */}
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-cost">Price: {item.cost}</p>

                  {/* Quantity Controls */}
                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">
                      {item.quantity}
                    </span>
                    <button
                      className="cart-item-button"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="cart-item-total">
                    Subtotal: ${calculateTotalCost(item)}
                  </p>

                  {/* Delete Button */}
                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom buttons */}
          <div className="cart-buttons">
            <button
              onClick={handleContinueShopping}
              className="continue_shopping_btn"
            >
              Continue Shopping
            </button>
            <button onClick={handleCheckout} className="get-started-button1">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
