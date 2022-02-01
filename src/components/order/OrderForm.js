import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { FormInput, FormButton, FormTitle } from "./FormElements";

export default function OrderForm(order) {
  const form = useRef();

  // function handleChange(e) {
  //   console.log(e);

  // }

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

  let filledQuantity = order.order.quantity * 2.2;
  let unfilledQuantity = order.order.quantity * 2;

  const total = order.order.filling
    ? `$ ${filledQuantity.toFixed(2)}`
    : `$ ${unfilledQuantity.toFixed(2)}`;

  return (
    <form className="order-form" onSubmit={sendEmail} ref={form}>
      <FormTitle className="order-form__title" text="Order Form" />
      <div className="order-form__input-wrapper">
        <FormInput
          className="first-name"
          name="first_name"
          title="First Name"
          value={
            order.order.first_name
              ? order.order.first_name.charAt(0).toUpperCase() +
                order.order.first_name.slice(1)
              : ""
          }
          placeholder="First Name"
          onChange={(e) =>
            order.setOrder({ ...order.order, first_name: e.target.value })
          }
        />
        <FormInput
          className="last-name"
          name="last_name"
          title="Last Name"
          value={
            order.order.last_name
              ? order.order.last_name.charAt(0).toUpperCase() +
                order.order.last_name.slice(1)
              : ""
          }
          placeholder="Last Name"
          onChange={(e) =>
            order.setOrder({ ...order.order, last_name: e.target.value })
          }
        />
        <FormInput
          className="email"
          name="email"
          title="Email Address"
          value={order.order.email}
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            order.setOrder({ ...order.order, email: e.target.value })
          }
        />
        <FormInput
          className="cake-flavor"
          name="cake_flavor"
          title="Cake Flavor"
          value={
            order.order.cake
              ? order.order.cake.charAt(0).toUpperCase() +
                order.order.cake.slice(1)
              : ""
          }
          placeholder="Cake Flavor"
          onChange={(e) =>
            order.setOrder({ ...order.order, cake: e.target.value })
          }
        />
        <FormInput
          className="frosting-flavor"
          name="frosting_flavor"
          title="Frosting Flavor"
          value={
            order.order.frosting
              ? order.order.frosting.charAt(0).toUpperCase() +
                order.order.frosting.slice(1)
              : ""
          }
          placeholder="Frosting Flavor"
          onChange={(e) =>
            order.setOrder({ ...order.order, frosting: e.target.value })
          }
        />
        <FormInput
          className="toppings"
          name="toppings"
          title="Toppings"
          value={
            order.order.toppings
              ? order.order.toppings.charAt(0).toUpperCase() +
                order.order.toppings.slice(1)
              : ""
          }
          placeholder="Toppings"
          onChange={(e) =>
            order.setOrder({ ...order.order, toppings: e.target.value })
          }
        />
        <FormInput
          className="filling"
          name="filling"
          title="Filling"
          value={
            order.order.filling
              ? order.order.filling.charAt(0).toUpperCase() +
                order.order.filling.slice(1)
              : ""
          }
          placeholder="Filling"
          onChange={(e) =>
            order.setOrder({ ...order.order, filling: e.target.value })
          }
        />
        <FormInput
          className="quantity"
          name="quantity"
          title="Quantity"
          value={order.order.quantity}
          placeholder="Quantity"
          onChange={(e) =>
            order.setOrder({ ...order.order, quantity: e.target.value })
          }
        />
        <FormInput
          className="pickup-date"
          name="pickup_date"
          title="Pickup Date"
          type="text"
          value={order.order.pickup_date}
          min="10/14/2021"
          placeholder="mm/dd/yyyy"
          onChange={(e) =>
            order.setOrder({ ...order.order, pickup_date: e.target.value })
          }
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
