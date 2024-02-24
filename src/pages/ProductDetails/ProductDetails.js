
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Product from "../../components/Producte/Product";
import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";

import "./ProductDetails.css";
const url = "https://fakestoreapi.com/products/";

export default function ProductDetails() {
  const { cartItems, addToCart, removeFromCart } = useContext(shopContext);
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(url + id);
  console.log(data);
  return (
    <div className="product_details">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <React.Fragment>
          <h4>{data?.title.split(0, 400)}</h4>
          <div className="img-container">
            <img className="img" src={data?.image} alt="product" />
          </div>
          <p> {data?.price}$ </p>
          <p> {data.title} </p>
          <div className="btn-buy">
          <button onClick={() => removeFromCart(data.id)}>-</button>

          <span>
            {cartItems?.filter((row) => row.id === data.id)[0]?.count}{" "}
          </span>
          
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
          </React.Fragment>
      )}
    </div>
  );
}
