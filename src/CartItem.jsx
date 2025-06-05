// src/CartItem.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    removeItem,
    updateQuantity,
    selectCartItems,
    selectTotalPrice,
    selectTotalCartItems
} from './CartSlice';
import './CartItem.css';

function CartItem() {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);
    const totalItemsInCart = useSelector(selectTotalCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrement = (name) => {
        dispatch(updateQuantity({ name, amount: 1 }));
    };

    const handleDecrement = (name, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch(updateQuantity({ name, amount: -1 }));
        } else {
            dispatch(removeItem(name));
        }
    };

    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    };

    const handleContinueShopping = () => {
        navigate('/products'); // UPDATED to navigate to /products
    };

    const handleCheckout = () => {
        alert('Functionality to be added for future reference');
    };

    return (
        <div className="cart-page">
            {/* Header Section - Using specific class names for CartItem page header */}
            <div className="navbar-cart-page">
                <div className="navbar-brand"> {/* Re-using general brand class if styles are similar */}
                    <Link to="/" className="navbar-brand-link">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery Logo" className="navbar-logo" />
                        <div>
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/products" className="navbar-link">Plants</Link> {/* UPDATED link */}
                    <Link to="/cart" className="navbar-link cart-link active"> {/* Active class for cart page */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="38" width="38">
                            <rect width="256" height="256" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg>
                        {totalItemsInCart > 0 && <span className="cart-badge">{totalItemsInCart}</span>}
                    </Link>
                </div>
            </div>

            <div className="cart-container">
                <h1 className="cart-title">Your Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty.</p>
                        <button onClick={handleContinueShopping} className="cart-action-button">
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-summary-total">
                            Total Cart Amount: ${totalPrice.toFixed(2)}
                        </div>

                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <div key={item.name} className="cart-item-card">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h2 className="cart-item-name">{item.name}</h2>
                                        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                                        <div className="cart-item-quantity">
                                            <button onClick={() => handleDecrement(item.name, item.quantity)} className="quantity-btn">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleIncrement(item.name)} className="quantity-btn">+</button>
                                        </div>
                                        <p className="cart-item-subtotal">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => handleRemoveItem(item.name)} className="delete-btn">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-actions">
                            <button onClick={handleContinueShopping} className="cart-action-button continue-shopping-btn">
                                Continue Shopping
                            </button>
                            <button onClick={handleCheckout} className="cart-action-button checkout-btn">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartItem;
