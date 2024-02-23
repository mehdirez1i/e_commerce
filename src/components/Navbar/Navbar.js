import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
   
  return (
    <div className='nav'>
      <h2>MahdiShop</h2>
      <Link  to="/">Home</Link> |
      <Link  to="/products">products</Link> |
      <Link  to="/cart">cart</Link> |
    </div>
  )
}
