import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css'; // We'll create/update this

function AboutUs() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/products'); // Ensure this matches the route in App.jsx
    };

    // The image URL should be reliable and publicly accessible
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';
    // Alternative: https://cdn.pixabay.com/photo/2017/07/25/08/08/medium-shot-2537329_1280.jpg (more garden-like)

    return (
        <div className="landing-page-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="landing-content">
                <h1 className="company-name">Paradise Nursery</h1>
                <p className="company-tagline">Where Green Meets Serenity</p>
                <p className="company-description">
                    At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to
                    provide a wide variety of high-quality plants that not only enhance the beauty of your
                    surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying
                    plants to aromatic fragrant ones, we have something for every plant enthusiast.
                    Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality
                    and care. Whether you're a seasoned gardener or just starting your green journey, we're here to
                    support you every step of the way. Feel free to explore our collection, ask questions, and let us help
                    you find the perfect plant for your home or office.
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and
                    experience the beauty of nature right at your doorstep.
                </p>
                <button className="get-started-button" onClick={handleGetStartedClick}>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default AboutUs;
