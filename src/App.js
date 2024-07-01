import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import RestaurantProduct from './Components/RestaurantProduct';
import sandwichImage from '../src/assets/as.png';
import pizzaImage from '../src/assets/ae.png';
import CoffeeImage from '../src/assets/aa.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './Components/Order';
import Ratings from './Components/Ratings';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <Router>
    <div className='bg'>
    <div className="App">
      <Navbar/>
      <h2 className='ourmenu'>
        <i><b>Today Special</b></i>
      </h2>
      <main>
      <Routes>
        <Route path="/" element={
          <>
            <RestaurantProduct
              name="Sandwich"
              description="Crispy chicken with spicy mayo and pickles on a toasted bun."
              price="8.99"
              image={sandwichImage}
            />
            <RestaurantProduct
              name="Pizza"
              description="Pizza, dish of Italian origin consisting of flattened disk of bread dough topped."
              price="8.99"
              image={pizzaImage}
            />
            <RestaurantProduct
              name="Coffee"
              description="Pizza, dish of Italian origin consisting of flattened disk of bread dough topped."
              price="8.99"
              image={CoffeeImage}
            />
            <RestaurantProduct
              name="Pizza"
              description="Pizza, dish of Italian origin consisting of flattened disk of bread dough topped."
              price="8.99"
              image={pizzaImage}
            />
             <RestaurantProduct
              name="Bread"
              description="Pizza, dish of Italian origin consisting of flattened disk of bread dough topped."
              price="8.99"
              image={sandwichImage}
            />
             <RestaurantProduct
              name="Tea"
              description="Pizza, dish of Italian origin consisting of flattened disk of bread dough topped."
              price="8.99"
              image={CoffeeImage}
            />
            
          </>
        } />
        <Route path="/order" element={<Order />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
    </div>
    </Router>
  );
}

export default App;
