import React from "react";

export default function ShoppingCart(images, order, setOrder) {
  console.log(images.order.cart.length);

  const cartStatus =
    images.order.cart.length > 0 ? "cart-visible" : "cart-hidden";

  return <h1 className={cartStatus}>ShoppingCart</h1>;
}
