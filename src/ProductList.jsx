import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { PLANTS_ARRAY} from '../public/data';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';


function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});
    const totalItems = cart.reduce((total, item) => (total + item.quantity), 0);

    const plantsArray = PLANTS_ARRAY;
    const dispatch = useDispatch();
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
        textAlign: 'center'
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }))
    }

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div>
                      <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                        <div style={{position: 'relative', display: 'inline-block'}}>
                          <h1 className='cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                              <rect width="156" height="156" fill="none"></rect>
                              <circle cx="80" cy="216" r="12"></circle>
                              <circle cx="184" cy="216" r="12"></circle>
                              <path 
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                    fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    id="mainIconPathAttribute"></path>
                            </svg>
                          </h1>
                          {totalItems > 0 && (
                            <span style={{
                              position: 'absolute',
                              top: '0',
                              right: '0',
                              backgroundColor: 'red',
                              color: 'white',
                              borderRadius: '50%',
                              width: '40px',
                              height: '40px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '22px',
                              fontWeight: 'bold'
                            }}>
                              {totalItems}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                </div>
                </div>
                  {!showCart ? (
                    <div className="product-grid">
                        {plantsArray.map((plantInfo, index) => (
                        <div key={index}>
                            <h1>
                            <div>{plantInfo.category}</div>
                            </h1>
                            <div className="product-list">
                            {plantInfo.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                <div>
                                    <img 
                                        className="product-image" 
                                        src={plant.image}
                                        alt={plant.name}
                                    />
                                </div>
                                <div className="product-title">{plant.name}</div>
                                <div className="product-description">{plant.description}</div>
                                <div className="product-cost">{plant.cost}</div>
                                <button
                                    className="product-button"
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    Add to Cart
                                </button>
                                {addedToCart[plant.name] && (
                                    <span style={{
                                        color: 'green',
                                        fontSize: '30px',
                                        animation: 'fadeInOut 2s ease-in-out'
                                    }}>
                                    ✓
                                    </span>
                                )}
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
