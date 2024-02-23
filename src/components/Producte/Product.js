import React, { useContext } from 'react'
import './Product.css'
import { shopContext } from '../../context/shopContext'

export default function Product({Product}) {
  const {cartItems, addToCart, removeFromCart} = useContext(shopContext)
  
  return (
    <div  className="product">
      
      <h4>{Product.title.split(0, 400)}</h4>
        <div className='img-container'>
            <img className='img' src={Product.image} alt="product" />

        </div>
        <p> Price: ${Product.price}</p>
        <div className='btn-buy' >
          <button onClick={() =>removeFromCart(Product.id)} >-</button>
          
          <span> {cartItems?.filter((row) => row.id === Product.id)[0]?.count} </span>
          <button onClick={() => addToCart(Product.id)} >+</button>
        </div>

    </div>
  )
}
