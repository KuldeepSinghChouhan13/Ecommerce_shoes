import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Product from "./Components/Product/Product";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import UserContext from "./Context/CreateContext";

function App() {
  

  const [cart, setCart] = useState([]); // Cart state

  // Add product to cart
  const addCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <BrowserRouter>
      <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/Product" element={<Product addCart={addCart} />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
