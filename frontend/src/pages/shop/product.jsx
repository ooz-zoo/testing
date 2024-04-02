import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
 const { id, productName, price, productImage, quantity } = props.data;
 const { addToCart, cartItems } = useContext(ShopContext);

 // Correctly access the quantity of the item in the cart
 const cartItem = cartItems[id];
 const cartItemCount = cartItem ? cartItem.quantity : 0;
 const maxQuantity = quantity;

 const handleAddToCart = () => {
    if (cartItemCount < maxQuantity) {
      addToCart(id);
    } else {
      alert(`You've reached the maximum quantity for ${productName}`);
    }
 };

 return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Ksh {price}</p>
        <p> Quantity: {quantity}</p>
      </div>
      <button className="addToCartBttn" onClick={handleAddToCart} disabled={cartItemCount >= maxQuantity}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
 );
};
