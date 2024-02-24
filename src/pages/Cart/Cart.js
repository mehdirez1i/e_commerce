import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../context/shopContext";
import Product from "../../components/Producte/Product";
import "./Card.css";

export default function Cart() {
  const { cartItems } = useContext(shopContext);
  const [listCart, setListCart] = useState();

  /////////////////
  useEffect(() => {
    async function getData() {
      const data = Promise.all(
        cartItems.map(
          async (i) =>
            await (
              await fetch("https://fakestoreapi.com/products/" + i.id)
            ).json()
        )
      );
      return data;
    }

    getData().then((data) => {
      setListCart(data);
    });
  }, [cartItems]);

  /////

  return (
    <div className="container">
      {console.log(listCart)}
      {listCart?.length === 0 && <p>Your shopping cart is empty</p>}
      {listCart &&
        listCart.map((i) => (
          <div key={i.id} className="product">
            <Product Product={i} />
          </div>
        ))}
    </div>
  );
}
