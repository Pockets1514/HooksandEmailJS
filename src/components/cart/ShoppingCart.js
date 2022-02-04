import React from "react";
import CartItem from "./CartItem";
export default function ShoppingCart({ cart, updateCart }) {
  const cartStatus = cart.length > 0 ? "cart-visible" : "cart-hidden";

  return (
    <div className="shopping-cart-wrapper">
      <h1 className={cartStatus}>ShoppingCart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.key}
            src={item.src}
            title={item.src.slice(14, -14)}
            quantity={item.quantity}
            alt="It'll look great. I Promise ;)"
            updateCart={updateCart}
            filling={item.filling}
          />
        ))}
      </div>
    </div>
  );
}
