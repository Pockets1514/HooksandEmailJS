import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { FormInput, FormButton, FormTitle } from "./FormElements";

export default function ContactForm() {
  const [message, setMessage] = useState({
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
          setMessage({
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
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oh no :( There was an error with your request. Please try again.  If this continues to occur email bohotogomaine@gmail.com"
          );
        }
      );
  }

  let filledQuantity = message.quantity * 2.21;
  let unfilledQuantity = message.quantity * 2;

  const total = message.filling
    ? `$ ${filledQuantity.toFixed(2)}`
    : `$ ${unfilledQuantity.toFixed(2)}`;

  return (
    <form className="contact-form" onSubmit={sendEmail} ref={form}>
      <FormTitle className="contact-form__title" text="Contact Form" />
      <p>
        Have something else in mind? <br /> Send your custom request with this
        form and maybe we can work it out!
      </p>
      <div className="contact-form__input-wrapper">
        <FormInput
          className="first-name"
          name="first_name"
          title="First Name"
          value={
            message.first_name
              ? message.first_name.charAt(0).toUpperCase() +
                message.first_name.slice(1)
              : ""
          }
          placeholder="First Name"
          onChange={(e) =>
            setMessage({ ...message, first_name: e.target.value })
          }
        />
        <FormInput
          className="last-name"
          name="last_name"
          title="Last Name"
          value={
            message.last_name
              ? message.last_name.charAt(0).toUpperCase() +
                message.last_name.slice(1)
              : ""
          }
          placeholder="Last Name"
          onChange={(e) =>
            setMessage({ ...message, last_name: e.target.value })
          }
        />
        <FormInput
          className="email"
          name="email"
          title="Email Address"
          value={message.email}
          type="email"
          placeholder="Email Address"
          onChange={(e) => setMessage({ ...message, email: e.target.value })}
        />
        <FormInput
          className="cake-flavor"
          name="cake_flavor"
          title="Cake Flavor"
          value={
            message.cake
              ? message.cake.charAt(0).toUpperCase() + message.cake.slice(1)
              : ""
          }
          placeholder="Cake Flavor"
          onChange={(e) => setMessage({ ...message, cake: e.target.value })}
        />
        <FormInput
          className="frosting-flavor"
          name="frosting_flavor"
          title="Frosting Flavor"
          value={
            message.frosting
              ? message.frosting.charAt(0).toUpperCase() +
                message.frosting.slice(1)
              : ""
          }
          placeholder="Frosting Flavor"
          onChange={(e) => setMessage({ ...message, frosting: e.target.value })}
        />
        <FormInput
          className="toppings"
          name="toppings"
          title="Toppings"
          value={
            message.toppings
              ? message.toppings.charAt(0).toUpperCase() +
                message.toppings.slice(1)
              : ""
          }
          placeholder="Toppings"
          onChange={(e) => setMessage({ ...message, toppings: e.target.value })}
        />
        <FormInput
          className="filling"
          name="filling"
          title="Filling"
          value={
            message.filling
              ? message.filling.charAt(0).toUpperCase() +
                message.filling.slice(1)
              : ""
          }
          placeholder="Filling"
          onChange={(e) => setMessage({ ...message, filling: e.target.value })}
        />
        <FormInput
          className="quantity"
          name="quantity"
          title="Quantity"
          value={message.quantity}
          placeholder="Quantity"
          onChange={(e) => setMessage({ ...message, quantity: e.target.value })}
        />
        <FormInput
          className="pickup-date"
          name="pickup_date"
          title="Pickup Date"
          type="text"
          value={message.pickup_date}
          min="10/14/2021"
          placeholder="mm/dd/yyyy"
          onChange={(e) =>
            setMessage({ ...message, pickup_date: e.target.value })
          }
        />
      </div>
      <div className="total">
        <p className="total__title">Estimated Total</p>
        <p className="total__price">{total}</p>
      </div>
      <div className="form-button-wrapper">
        <FormButton
          className="contact-form__submit-message "
          name="submit"
          title="Submit Form"
          type="Submit"
          largeButton
        />
      </div>
    </form>
  );
}
