import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Meadow Garden Plants!</p>
      <p className="about-us-content">
        Founded in the early 90’s, Meadow Garden Plants is an independent family run nursery business 
        specialising in British influenced flowering plant compositions and hanging baskets. 
        Having grown from strength to strength, we are today, recognised as one of the leading nurseries
         specialising in creative basket compositions in France. We have for many years supplied 
         the Roland Garros Tennis tournament as well as several Michelin star restaurants and we also exhibit
         at the most highly esteemed plant shows in France and Belgium.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
       Although flower baskets remain the heart of our business, we are also very proud of our selection 
       of high quality flowering perennials, ornamental grasses and David Austin roses that will thrive 
       in your garden as well as our new and exciting range for 2018 of vegetables and herbs which we will 
       offer for sale alongside our creative planted baskets this Spring.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Our plants are rigorously selected and hand-picked by us each season and then attentively nurtured 
        and reared on site in one of our seven tunnels throughout the spring, summer and autumn by our team. 
        Everything is done manually to ensure maximum contact with the plants and to make sure nothing is missed. 
        This also allows us to work in harmony with nature and minimise chemical treatments through good 
        old fashioned plant husbandry. We can then be sure that the plants you buy from us whether 
        as individual plants or as part of a carefully designed composition are some of the best 
        you will find on the market.
      </p>
    </div>
  );
}

export default AboutUs;
