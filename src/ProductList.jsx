import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectTotalCartItems } from './CartSlice'; // Path updated if CartSlice is not in store/
import './ProductList.css'; // Ensure this CSS is comprehensive

// plantsArray (same as in your repo, good)
const plantsArray = [
    // ... (your existing plantsArray content) ...
    // Example entry:
    {
        category: "Air Purifying Plants",
        plants: [
            { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", price: 15 },
            // ... more plants
        ]
    },
    // ... more categories
];


function ProductList() {
    const dispatch = useDispatch();
    const totalItemsInCart = useSelector(selectTotalCartItems) || 0;

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            {/* Header section - styled by ProductList.css */}
            <div className="navbar-product-list"> {/* Use a specific class */}
                <div className="navbar-brand">
                    <Link to="/" className="navbar-brand-link">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery Logo" className="navbar-logo" />
                        <div>
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </Link>
                </div>
                <div className="navbar-links">
                    {/* "Plants" link should ideally link to itself or be styled as active if on this page */}
                    <Link to="/products" className="navbar-link active">Plants</Link> {/* Added active class for current page */}
                    <Link to="/cart" className="navbar-link cart-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="38" width="38">
                            <rect width="256" height="256" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg>
                        {totalItemsInCart > 0 && <span className="cart-badge">{totalItemsInCart}</span>}
                    </Link>
                </div>
            </div>

            {/* Product Display Area */}
            <div className="product-page-container">
                {plantsArray.map((categoryObj) => (
                    <div key={categoryObj.category} className="category-section">
                        <h2 className="category-title">{categoryObj.category}</h2>
                        <div className="product-grid">
                            {categoryObj.plants.map((plant) => (
                                <div key={plant.name + plant.category} className="product-card"> {/* Added category to key for more uniqueness if names repeat */}
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <h3 className="product-name">{plant.name}</h3>
                                    <p className="product-price">${plant.price.toFixed(2)}</p>
                                    <button className="add-to-cart-button" onClick={() => handleAddToCart(plant)}>
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
