import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css'; // Optional, make sure it exists or style inline

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateItemTotal = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return price * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: {item.cost}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${calculateItemTotal(item).toFixed(2)}</p>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
          <button onClick={onContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartItem;
