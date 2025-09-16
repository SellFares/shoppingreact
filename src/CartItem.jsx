import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products
  const calculateTotalAmount = () =>
    cart.reduce(
      (total, item) => total + parseFloat(item.cost.substring(1)) * item.quantity,
      0
    ).toFixed(2);

  // Calculate total quantity of items in cart
  const calculateTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const handleContinueShopping = (e) => {
    if (onContinueShopping) onContinueShopping(e);
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

  // Optional: add item to cart (Task 4)
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const calculateTotalCost = (item) =>
    (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2>Total Items in Cart: {calculateTotalQuantity()}</h2>
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemove(item)}>Delete</button>
                <button onClick={() => handleAddItem(item)}>Add More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="total_cart_amount">
        Grand Total: ${calculateTotalAmount()}
      </div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
