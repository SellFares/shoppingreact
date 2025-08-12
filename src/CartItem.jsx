import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate the total cost of all items in the cart
    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach(item => {
            const itemCost = parseFloat(item.cost.substring(1));
            total += item.quantity * itemCost;
        });
        return total.toFixed(2);
    };

    const handleContinueShopping = () => {
        onContinueShopping();
    };

    // Handle the checkout process (currently just an alert)
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    // Handle incrementing the quantity of an item
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Handle decrementing the quantity of an item
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    // Handle removing an item from the cart
    const handleRemove = (itemName) => {
        dispatch(removeItem(itemName));
    };

    // Calculate the subtotal for a single item
    const calculateTotalCost = (item) => {
        const itemCost = parseFloat(item.cost.substring(1));
        return (item.quantity * itemCost).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 className="total-cart-amount">Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-actions">
                                <div className="cart-item-quantity">
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button onClick={() => handleIncrement(item)}>+</button>
                                </div>
                                <div className="cart-item-total">
                                    Total: ${calculateTotalCost(item)}
                                </div>
                                <button className="remove-button" onClick={() => handleRemove(item.name)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="continue-shopping">
                <button className="continue-shopping-button" onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
                <button className="checkout-button" onClick={handleCheckoutShopping}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CartItem;
