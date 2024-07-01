import React from 'react';
import { useLocation } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const { name, price } = location.state;

  return (
    <div className="order-form">
      <h2>Order {name}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" required />
        </div>
        <div className="form-group">
          <p>Total Price: ${price}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Order;
