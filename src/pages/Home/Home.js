import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>

      <div className='hero'>
        <h2 >
          welcome to <br/> <span>MahdiShop</span>
        </h2>
      </div >
        <Link className='link' to='/products' ><span>Show Products &gt;&gt;</span>  </Link>
    </div>
    )
}
