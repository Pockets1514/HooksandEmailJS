import React from "react";

export default function CartItem({
  onAdd,
  onRemove,
  onSubtract,
  key,
  src,
  title,
  alt,
  quantity,
  filling,
}) {
  return (
    <div className="cart-item" key={key}>
      <img className="cart-item__image" src={src} alt={alt}></img>
      <h1 className="cart-item__title">{title}</h1>
      <p className="cart-item__quantity"> {quantity}</p>
      <p className="cart-item__price">{`$${
        filling ? (quantity * 2.21).toFixed(2) : (quantity * 2).toFixed(2)
      }`}</p>
      <button
        className="cart-item__button cart-item__plus"
        onClick={() => onAdd}
      >
        +
      </button>
      <button
        className="cart-item__button cart-item__minus"
        onClick={() => onSubtract}
      >
        -
      </button>
      <button
        className="cart-item__button cart-item__remove"
        onClick={() => onRemove}
      >
        x
      </button>
    </div>
  );
}
