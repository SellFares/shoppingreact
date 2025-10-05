import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Helper function to parse cost string (e.g., "$15") into a number
    const parseCost = (cost) => {
        // Remove the '$' sign using substring(1) and convert to a floating-point number
        return parseFloat(cost.substring(1));
    };

    // Calculate total cost for an item by multiplying its quantity with its unit price
    const calculateTotalCost = (item) => {
        // Multiply the parsed cost by the item's quantity
        return parseCost(item.cost) * item.quantity;
    };

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        // Initialize a variable total to hold the cumulative sum.
        let total = 0;
        // Iterate over the cart array using cart.forEach().
        cart.forEach(item => {
            // For each item, extract its quantity and cost, multiply them, and add to total.
            total += parseFloat(item.cost.substring(1)) * item.quantity;
        });
        // After processing all items, return the final total sum.
        return total.toFixed(2);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        // Call the onContinueShopping(e) function passed from the parent component.
        onContinueShopping(e);
    };

    const handleIncrement = (item) => {
        // Dispatch an action to update the quantity by increasing it by 1
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            // If quantity is more than 1, dispatch an action to decrease it by 1
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            // If quantity is 1, dispatch an action to remove the item from the cart
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        // Dispatch an action to remove the item from the cart completely
        dispatch(removeItem(item.name));
    };

    // Function to handle checkout action
    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
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
                            <div className="cart-item-total">Total: ${calculateTotalCost(item).toFixed(2)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;