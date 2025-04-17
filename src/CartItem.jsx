import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.js';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cart = useSelector(s => s.cart.items);
  const dispatch = useDispatch();

  const total = cart
    .reduce((sum, i) => sum + parseFloat(i.cost.slice(1)) * i.quantity, 0)
    .toFixed(2);

  const inc = item => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const dec = item => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${total}</h2>
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>{item.cost}</p>
            <div className="qty-controls">
              <button onClick={() => dec(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => inc(item)}>+</button>
            </div>
            <p>
              Subtotal: ${(parseFloat(item.cost.slice(1)) * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={() => alert('Checkout coming soon!')}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
