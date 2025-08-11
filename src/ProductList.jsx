import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    // This state was missing and caused the app to crash
    const [addedToCart, setAddedToCart] = useState(new Set());
    const [showPlants, setShowPlants] = useState(true);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => new Set(prevState).add(plant.name));
    };

    const plantsArray = [
        {
            category: 'Cactus & Succulents',
            plants: [
                {
                    name: 'Cactus',
                    image: 'https://cdn.pixabay.com/photo/2018/06/18/22/41/cactus-3484227_1280.jpg',
                    description: 'A resilient, low-maintenance plant, perfect for beginners.',
                    cost: '$10.00',
                },
                {
                    name: 'Aloe Vera',
                    image: 'https://cdn.pixabay.com/photo/2018/04/16/22/02/aloe-vera-3325615_1280.jpg',
                    description: 'A succulent known for its soothing properties.',
                    cost: '$12.00',
                },
                {
                    name: 'Jade Plant',
                    image: 'https://cdn.pixabay.com/photo/2016/11/21/16/09/plant-1845137_1280.jpg',
                    description: 'A popular good-luck charm.',
                    cost: '$15.00',
                },
            ],
        },
        {
            category: 'Indoor Plants',
            plants: [
                {
                    name: 'Monstera',
                    image: 'https://cdn.pixabay.com/photo/2018/05/01/17/29/monstera-3366885_1280.jpg',
                    description: 'A beautiful tropical plant with unique leaves.',
                    cost: '$25.00',
                },
                {
                    name: 'Snake Plant',
                    image: 'https://cdn.pixabay.com/photo/2021/01/22/06/19/snake-plant-5939828_1280.jpg',
                    description: 'Known for its air-purifying qualities.',
                    cost: '$20.00',
                },
                {
                    name: 'Fiddle Leaf Fig',
                    image: 'https://cdn.pixabay.com/photo/2018/03/23/15/28/plant-3253753_1280.jpg',
                    description: 'A striking plant with large, glossy leaves.',
                    cost: '$40.00',
                },
            ],
        },
        {
            category: 'Outdoor Plants',
            plants: [
                {
                    name: 'Lavender',
                    image: 'https://cdn.pixabay.com/photo/2017/08/07/21/57/lavender-2609054_1280.jpg',
                    description: 'A fragrant herb with beautiful purple flowers.',
                    cost: '$18.00',
                },
                {
                    name: 'Rose',
                    image: 'https://cdn.pixabay.com/photo/2017/06/07/19/33/rose-2381285_1280.jpg',
                    description: 'A classic flower known for its beauty and scent.',
                    cost: '$22.00',
                },
                {
                    name: 'Hydrangea',
                    image: 'https://cdn.pixabay.com/photo/2017/07/28/18/59/hydrangea-2549247_1280.jpg',
                    description: 'Large, colorful flower clusters.',
                    cost: '$30.00',
                },
            ],
        },
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
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

    const handleContinueShopping = () => {
        setShowCart(false);
        setShowPlants(true); // Navigate back to the plants view
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        setShowCart(false);
        setShowPlants(true);
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt=""
                        />
                        <a href="/" onClick={handleHomeClick} style={styleA}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={handlePlantsClick} style={styleA}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <h1 className="cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    id="IconChangeColor"
                                    height="68"
                                    width="68"
                                >
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path
                                        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                        fill="none"
                                        stroke="#faf9f9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                                <span className="cart-quantity-label">{calculateTotalQuantity()}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            {showPlants && !showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>
                                <div>{category.category}</div>
                            </h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img
                                            className="product-image"
                                            src={plant.image}
                                            alt={plant.name}
                                        />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button
                                            className={`product-button ${
                                                addedToCart.has(plant.name) ? 'added-to-cart' : ''
                                            }`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart.has(plant.name)}
                                        >
                                            {addedToCart.has(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
