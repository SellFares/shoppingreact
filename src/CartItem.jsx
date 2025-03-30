import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;

    if (!cart || cart.length === 0) return total;

    cart.forEach(item => {
        // Extract cost (remove $ and convert to number)
        const cost = parseFloat(item.cost.substring(1));
        // Get quantity
        const quantity = item.quantity || 0;
        // Add to running total
        total += cost * quantity;
    });

    // Return formatted total with 2 decimal places
    return total.toFixed(2);
};

  const handleContinueShopping = (e) => {
    e.preventDefault();
    // Call the callback function passed as prop
    onContinueShopping(e);
  };


  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
   if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
    else {
      // Remove item if quantity is 1 and decrement is pressed
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    if (!item) return "0.00";
    const cost = parseFloat(item.cost.substring(1));
    return (cost * item.quantity).toFixed(2);
<<<<<<< HEAD
};
=======
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };
>>>>>>> new_branch

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" href='#' onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


