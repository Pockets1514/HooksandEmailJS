import React from "react";
import CartItem from "./CartItem";
export default function ShoppingCart({ cart, onAdd }) {
  const cartStatus = cart.length > 0 ? "cart-visible" : "cart-hidden";

  return (
    <div className={cartStatus}>
      <h1 className="cart-header">ShoppingCart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.key}
            src={item.src}
            title={item.src.slice(14, -14)}
            quantity={item.quantity}
            alt="It'll look great. I Promise ;)"
            onAdd={onAdd}
            filling={item.filling}
          />
        ))}
      </div>
    </div>
  );
}
