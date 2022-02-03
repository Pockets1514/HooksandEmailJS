import React from "react";
import CartItem from "./CartItem";
export default function ShoppingCart(images, setOrder) {
  console.log(images.order.cart);

  const cartStatus =
    images.order.cart.length > 0 ? "cart-visible" : "cart-hidden";

  return (
    <div className="shopping-cart-wrapper">
      <h1 className={cartStatus}>ShoppingCart</h1>
      <div className="cart-items">
        {images.order.cart.map((item) => (
          <CartItem
            key={item.key}
            className={`cart-item`}
            src={item.src}
            title={item.src.slice(14, -14)}
            quantity={item.quantity}
            alt="It'll look great. I Promise ;)"
            setOrder={setOrder}
          />
        ))}
      </div>
    </div>
  );
}
