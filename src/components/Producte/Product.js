import React from 'react'
import './Product.css'
export default function Product({Product}) {
  return (
    <div  className="product">
      <h4>{Product.title.split(0, 400)}</h4>
        <div className='img-container'>
            <img className='img' src={Product.image} alt="product" />

        </div>
        <p> Price: ${Product.price}</p>
        <div className='btn-buy' >
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>

    </div>
  )
}
