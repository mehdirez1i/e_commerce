import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Prodocts from "./pages/Prodocts/Products";
import Cart from './pages/Cart/Cart'
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function App() {

 
  return (
    <div className="App">

        <BrowserRouter >
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Prodocts/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/productdetails/:id" element={<ProductDetails/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
