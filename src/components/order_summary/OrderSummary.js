import emailjs from "emailjs-com";
import CartItem from "../cart/CartItem";
import { FormInput, FormButton } from "../contact/FormElements";
import { useState, useRef } from "react";

export default function OrderSummary({
  cart,
  products,
  onAdd,
  onRemove,
  onSubtract,
  updateCart,
  totalPrice,
}) {
  const galleryOrderItems = cart
    .map((item) => {
      return `${item.quantity} ${item.src.slice(14, -14)}`;
    })
    .join(", ");

  const [galleryOrder, updateOrder] = useState({
    first_name: "",
    last_name: "",
    email: "",
    pickup_date: "",
    cartOrder: galleryOrderItems,
    price: (totalPrice * 1.08).toFixed(2),
  });

  const form = useRef();

  const SendOrder = (e, galleryOrderItems) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "BohoToGoInbox",
        "bohotogo_gallery_order",
        form.current,
        "user_RJlVugmVGN7JwuDn1zbTd"
      )
      .then(
        (result) => {
          console.log(result.text);
          updateCart([]);
          galleryOrderItems = "";
          updateOrder({
            ...galleryOrder,
            first_name: "",
            last_name: "",
            email: "",
            pickup_date: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oh no :( There was an error with your request. Please try again.  If this continues to occur email bohotogomaine@gmail.com"
          );
        }
      );
  };

  return (
    <form className="order-summary" onSubmit={SendOrder} ref={form}>
      <div className="order-summary__customer-info">
        <FormInput
          className="first-name order-summary__input"
          name="first_name"
          title="First Name"
          value={
            galleryOrder.first_name
              ? galleryOrder.first_name.charAt(0).toUpperCase() +
                galleryOrder.first_name.slice(1)
              : ""
          }
          placeholder="First Name"
          onChange={(e) =>
            updateOrder({ ...galleryOrder, first_name: e.target.value })
          }
        />
        <FormInput
          className="last-name order-summary__input"
          name="last_name"
          title="Last Name"
          value={
            galleryOrder.last_name
              ? galleryOrder.last_name.charAt(0).toUpperCase() +
                galleryOrder.last_name.slice(1)
              : ""
          }
          placeholder="Last Name"
          onChange={(e) =>
            updateOrder({ ...galleryOrder, last_name: e.target.value })
          }
        />
        <FormInput
          className="email order-summary__input"
          name="email"
          title="Email Address"
          value={galleryOrder.email}
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            updateOrder({ ...galleryOrder, email: e.target.value })
          }
        />
        <FormInput
          className="pickup-date order-summary__input date-picker"
          name="pickup_date"
          title="Pickup Date"
          value={galleryOrder.pickup_date}
          type="date"
          placeholder="mm/dd/yyyy"
          onChange={(e) =>
            updateOrder({ ...galleryOrder, pickup_date: e.target.value })
          }
        />
        <FormInput
          className="hidden-cartOrder hidden-input"
          name="cartOrder"
          title="Cart Order"
          value={galleryOrder.cartOrder}
          type="text"
        />
        <FormInput
          className="hidden-totalPrice hidden-input"
          name="price"
          title="Price"
          value={(totalPrice * 1.08).toFixed(2)}
          type="text"
        />
      </div>
      <div className="order-summary__totals">
        <span className="order-summary__totals__subtotal-label">Subtotal </span>
        <p className="order-summary__totals__subtotal-amount">
          $ {totalPrice.toFixed(2)}
        </p>
        <span className="order-summary__totals__tax-label">Tax (8%) </span>
        <p className="order-summary__totals__tax-amount">
          $ {(totalPrice * 0.08).toFixed(2)}
        </p>
        <span className="order-summary__totals__total-label">Total </span>
        <p className="order-summary__totals__total-amount">
          $ {(totalPrice * 1.08).toFixed(2)}
        </p>
      </div>
      <FormButton
        className="order-summary__submit-order"
        name="submit"
        title="Submit Order"
        type="Submit"
        largeButton
      />
      <div className="order-summary__items">
        {cart.map((item) => (
          <CartItem
            cartKey={item.key}
            cart={cart}
            src={item.src}
            title={item.src.slice(14, -14)}
            quantity={item.quantity}
            alt="It'll look great. I Promise ;)"
            onAdd={onAdd}
            onSubtract={onSubtract}
            onRemove={onRemove}
            products={products}
            filling={item.filling}
          />
        ))}
      </div>
    </form>
  );
}
