import React, { useState } from "react";
import CartItem from "./CartItem";

export default function ShoppingCart({ cart, onAdd }) {
  const [minMaxStatus, updateMinMax] = useState({
    cartSize: "min",
  });

  console.log(minMaxStatus);

  const cartVisibility = cart.length > 0 ? "cart-visible" : "cart-hidden";
  const cartQuantity = cart.length > 0 ? `(${cart.length})` : "";
  const Minimize = () => {
    updateMinMax({ cartSize: "min" });
    // console.log(minMaxStatus);
  };
  const Maximize = () => {
    updateMinMax({ cartSize: "max" });
    // console.log(minMaxStatus);
  };
  return (
    <div className={`${cartVisibility} cart-${minMaxStatus}`}>
      <div className="cart-header">
        <h1 className="cart-header__title">ShoppingCart</h1>
        <h1 className="cart-header__qty">{cartQuantity}</h1>
        {minMaxStatus.cartSize === "max" ? (
          <button
            className="cart-header__make-min cart-header__btn"
            onClick={Minimize}
          >
            __
          </button>
        ) : (
          <button
            className="cart-header__make-max cart-header__btn"
            onClick={Maximize}
          >
            X
          </button>
        )}
      </div>
      <div className={`cart-items cart-items-${minMaxStatus}`}>
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
