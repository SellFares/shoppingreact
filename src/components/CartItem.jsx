import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate totals
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  // Quantity handlers
  const handleIncrement = (item) => {
    dispatch(addItem(item)); // Using addItem for increment
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item handler
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping handler
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total">Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div className="cart-items-list">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              
              <div className="cart-item-details">
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">{item.cost}</p>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrement"
                      onClick={() => handleDecrement(item)}
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn increment"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <div className="subtotal">
                    Subtotal: ${calculateItemSubtotal(item).toFixed(2)}
                  </div>

                  <button 
                    className="remove-item"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-actions">
        <button 
          className="continue-shopping-btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout (${calculateTotalAmount()})
        </button>
      </div>
    </div>
  );
};

export default CartItem;