// ProductList.jsx
import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false); // Manage visibility of cart
    const [addedToCart, setAddedToCart] = useState({}); // To track if a product is added
    const dispatch = useDispatch();

    // Access cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total quantity of items in cart
    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Handle adding item to cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch addItem action to Redux
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Update state to mark this product as added
        }));
    };

    // Sample plant data
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
            ]
        }
        // Add more categories here...
    ];

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <a href="/" onClick={onHomeClick}>
                        <h3>Paradise Nursery</h3>
                    </a>
                </div>
                <button onClick={() => setShowCart(true)}>Go to Cart ({calculateTotalQuantity()})</button>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, idx) => (
                                    <div className="product-card" key={idx}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p>{plant.cost}</p>
                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
        
    );
}

export default ProductList;
