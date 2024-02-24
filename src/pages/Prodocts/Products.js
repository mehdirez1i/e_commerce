import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import style from "./Products.css";
import Product from "../../components/Producte/Product";

export default function Prodocts() {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  useEffect(() => {
  }, [data]);

  return (
    <div className="container">
      {error && <p> {error} </p>}
      {isLoading && <p className="loading"> Loading...</p>}

      {data &&
        data.map((i) => (
          <div key={i.id} className="product">
            <Product Product={i} />
          </div>
        ))}
    </div>
  );
}
