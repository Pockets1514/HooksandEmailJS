import React from "react";

export default function CartItem({
  onAdd,
  onRemove,
  onSubtract,
  cartKey,
  cart,
  src,
  title,
  alt,
  quantity,
  filling,
  products,
}) {
  const currentItem = {
    key: cartKey,
    src: src,
    title: title,
    quantity: quantity,
    products: products,
    filling: filling,
  };
  console.log(currentItem);
  return (
    <div className="cart-item" products={products} key={cartKey} cart={cart}>
      <img className="cart-item__image" src={src} alt={alt}></img>
      <h1 className="cart-item__title">{title}</h1>
      <p className="cart-item__quantity"> {quantity}</p>
      <p className="cart-item__price">{`$${
        filling ? (quantity * 2.21).toFixed(2) : (quantity * 2).toFixed(2)
      }`}</p>
      <button
        className="cart-item__button cart-item__plus"
        onClick={(cart) => onAdd(currentItem)}
      >
        +
      </button>
      <button
        className="cart-item__button cart-item__minus"
        onClick={() => onSubtract(currentItem)}
      >
        -
      </button>
      <button
        className="cart-item__button cart-item__remove"
        onClick={() => onRemove(currentItem)}
      >
        x
      </button>
    </div>
  );
}
