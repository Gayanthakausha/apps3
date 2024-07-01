import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantProduct = ({ name, description, price, link, image}) => {
  
  return (
    <div className="product-card">
      {image && <img src={image} alt={name} className="product-image" />}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Link to="/order" state={{ name, price }}>
        <button className="view-more-button">Order Now</button>
      </Link>
    </div>
  );
};

export default RestaurantProduct;
