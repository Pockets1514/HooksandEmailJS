import React from "react";

export default function CartItem(
  setOrder,
  key,
  className,
  src,
  title,
  alt,
  quantity
) {
  const increaseQuantity = () => {
    setOrder();
  };

  const decreaseQuantity = () => {
    setOrder();
  };

  return (
    <div className="cart-item" key={key}>
      <img className="cart-item__image" src={src} alt={alt}></img>
      <h1 className="cart-item__title">{title}</h1>
      <p className="cart-item__quantity">Quantity {quantity}</p>
      <button
        className="cart-item__button cart-item__plus"
        onClick={increaseQuantity}
      >
        +
      </button>
      <button
        className="cart-item__button cart-item__minus"
        onClick={decreaseQuantity}
      >
        -
      </button>
    </div>
  );
}
