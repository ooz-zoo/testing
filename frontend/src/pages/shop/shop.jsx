import React from "react";
import { PRODUCTS } from "../../JuiceProducts";
import { Product } from "./product";
import "./shop.css";
import Navbar from "../../components/Navbar";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <div classname=""><Navbar/></div>
        <h1>Juice Flavors</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} /> // Add key prop here
        ))}
      </div>
    </div>
  );
};
