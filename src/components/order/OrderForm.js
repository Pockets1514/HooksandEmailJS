import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { FormInput, FormButton, FormTitle } from "./FormElements";

export default function OrderForm() {
  const [order, setOrder] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cake: "",
    frosting: "",
    toppings: "",
    filling: "",
    quantity: 6,
    pickup_date: "",
  });
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "BohoToGoInbox",
        "bohotogo_order_request",
        form.current,
        "user_RJlVugmVGN7JwuDn1zbTd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Your request is on it's way to my inbox, but I am only one woman. Please allow up to one week for a response."
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oh no :( There was an error with your request. Please try again.  If this continues to occur email bohotogomaine@gmail.com"
          );
        }
        // dispatch({
        //   type: "RESET_FORM",
        //   payload: null,
        // })
      );
  }

  let filledQuantity = order.quantity * 2.2;
  let unfilledQuantity = order.quantity * 2;

  const total = order.filling
    ? `$ ${filledQuantity.toFixed(2)}`
    : `$ ${unfilledQuantity.toFixed(2)}`;

  return (
    <form className="order-form" onSubmit={sendEmail} ref={form}>
      <FormTitle className="order-form__title" text="Order Form" />
      <p>
        Have something in mind? Send your custom request <br />
        with this form and maybe we can work it out!
      </p>
      <div className="order-form__input-wrapper">
        <FormInput
          className="first-name"
          name="first_name"
          title="First Name"
          value={
            order.first_name
              ? order.first_name.charAt(0).toUpperCase() +
                order.first_name.slice(1)
              : ""
          }
          placeholder="First Name"
          onChange={(e) => setOrder({ ...order, first_name: e.target.value })}
        />
        <FormInput
          className="last-name"
          name="last_name"
          title="Last Name"
          value={
            order.last_name
              ? order.last_name.charAt(0).toUpperCase() +
                order.last_name.slice(1)
              : ""
          }
          placeholder="Last Name"
          onChange={(e) => setOrder({ ...order, last_name: e.target.value })}
        />
        <FormInput
          className="email"
          name="email"
          title="Email Address"
          value={order.email}
          type="email"
          placeholder="Email Address"
          onChange={(e) => setOrder({ ...order, email: e.target.value })}
        />
        <FormInput
          className="cake-flavor"
          name="cake_flavor"
          title="Cake Flavor"
          value={
            order.cake
              ? order.cake.charAt(0).toUpperCase() + order.cake.slice(1)
              : ""
          }
          placeholder="Cake Flavor"
          onChange={(e) => setOrder({ ...order, cake: e.target.value })}
        />
        <FormInput
          className="frosting-flavor"
          name="frosting_flavor"
          title="Frosting Flavor"
          value={
            order.frosting
              ? order.frosting.charAt(0).toUpperCase() + order.frosting.slice(1)
              : ""
          }
          placeholder="Frosting Flavor"
          onChange={(e) => setOrder({ ...order, frosting: e.target.value })}
        />
        <FormInput
          className="toppings"
          name="toppings"
          title="Toppings"
          value={
            order.toppings
              ? order.toppings.charAt(0).toUpperCase() + order.toppings.slice(1)
              : ""
          }
          placeholder="Toppings"
          onChange={(e) => setOrder({ ...order, toppings: e.target.value })}
        />
        <FormInput
          className="filling"
          name="filling"
          title="Filling"
          value={
            order.filling
              ? order.filling.charAt(0).toUpperCase() + order.filling.slice(1)
              : ""
          }
          placeholder="Filling"
          onChange={(e) => setOrder({ ...order, filling: e.target.value })}
        />
        <FormInput
          className="quantity"
          name="quantity"
          title="Quantity"
          value={order.quantity}
          placeholder="Quantity"
          onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
        />
        <FormInput
          className="pickup-date"
          name="pickup_date"
          title="Pickup Date"
          type="text"
          value={order.pickup_date}
          min="10/14/2021"
          placeholder="mm/dd/yyyy"
          onChange={(e) => setOrder({ ...order, pickup_date: e.target.value })}
        />
      </div>
      <div className="form-button-wrapper">
        <FormButton
          className="order-form__submit-order "
          name="submit"
          title="Submit Order"
          type="Submit"
          largeButton
        />
      </div>
      <div className="total-wrapper">
        <p className="total-title">Estimated Total</p>
        <p className="total-price">{total}</p>
      </div>
    </form>
  );
}
