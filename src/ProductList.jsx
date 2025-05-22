import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList(props) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const alreadyInCart = (itemName) => {
        return cartItems.some((item) => item.name === itemName);
    };
    const handleAddToCart = (item) => {
        dispatch(addItem(item));
    };
    const totalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Place your plantsArray definition here (unchanged for brevity)
    const plantsArray = [/* ... keep your plant data here ... */];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    // Fix: onHomeClick should be defined or passed as a prop
    const handleHomeClick = (e) => {
        e.preventDefault();
        if (props.onHomeClick) {
            props.onHomeClick();
        }
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={handleHomeClick}>
                            <div>
                                <h3 style={{ color: 'white' }}>Manatee Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div*

