import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      let cost = item.cost.toString().replace('$', '');
      cost = parseFloat(cost);
      total += cost * item.quantity;
    });

    console.log('Total amount:', total);
    return total;
  };

  const handleContinueShopping = () => {
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    const updatedQuantity = item.quantity + 1;
    dispatch(updateQuantity({ name: item.name, quantity: updatedQuantity }));
    console.log('Item incremented:', item.name, 'New quantity:', updatedQuantity);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
      console.log('Item decremented:', item.name, 'New quantity:', item.quantity - 1);
    } else {
      dispatch(removeItem(item.name));
      console.log('Item removed on decrement:', item.name);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    console.log('Item removed:', item.name);
  };

  const calculateTotalCost = (item) => {
    let cost = item.cost.toString().replace('$', '');
    cost = parseFloat(cost);
    return cost * item.quantity;
  };

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
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
