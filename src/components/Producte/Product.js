import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product({ Product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

  return (
    <React.Fragment>
    {Product && <div className="product">
      <Link to={"/productdetails/" + Product?.id}>
        <h4>{Product.title?.split(0, 400)}</h4>
        <div className="img-container">
          <img className="img" src={Product.image} alt="product" />
        </div>
        <p> Price: ${Product.price}</p>
        </Link>
        <div className="btn-buy">
          <button onClick={() => removeFromCart(Product.id)}><span>- </span> </button>

          <span>
            {cartItems?.filter((row) => row.id === Product.id)[0]?.count}{" "}
          </span>
          
          <button onClick={() => addToCart(Product.id)}><span>+ </span> </button>
        </div>
      
    </div>}
    </React.Fragment>
  );
}
