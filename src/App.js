import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Prodocts from "./pages/Prodocts/Products";
import Cart from './pages/Cart/Cart'
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
function App() {

 
  return (
    <div className="App">

        <BrowserRouter >
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Prodocts/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/productdetails/:id" element={<ProductDetails/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
