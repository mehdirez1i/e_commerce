import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Prodocts from "./pages/Prodocts/Products";
import Cart from './pages/Cart/Cart'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

 
  return (
    <div className="App">
            
        <BrowserRouter >
        <Navbar />
          <Routes>
            <Route path="/products" element={<Prodocts/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
