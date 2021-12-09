import emailjs from "emailjs-com";
import React, { useReducer, useRef } from "react";
import { FormInput, FormTextArea, FormButton, FormTitle } from "./FormElements";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      return {
        first_name: action.payload,
      };
    case "UPDATE_LAST_NAME":
      return {
        last_name: action.payload,
      };
    case "UPDATE_EMAIL":
      return {
        email: action.payload,
      };
    case "UPDATE_CAKE":
      return {
        cake_flavor: action.payload,
      };
    case "UPDATE_FROSTING":
      return {
        frosting_flavor: action.payload,
      };
    case "UPDATE_TOPPINGS":
      return {
        toppings: action.payload,
      };
    case "UPDATE_FILLING":
      return {
        filling: action.payload,
      };
    case "UPDATE_QUANTITY":
      return {
        quantity: action.payload,
      };
    case "UPDATE_DATE":
      return {
        pickup_date: action.payload,
      };
    case "UPDATE_REQUESTS":
      console.log(state);
      return {
        special_requests: action.payload,
      };
    case "RESET_FORM":
      return {
        first_name: "",
        last_name: "",
        email: "",
        cake_flavor: "",
        frosting_flavor: "",
        toppings: "",
        filling: "",
        quantity: "",
        pickup_date: "",
        special_requests: "",
      };

    default:
      return state;
  }
}

export default function OrderForm() {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    cake_flavor: "",
    frosting_flavor: "",
    toppings: "",
    filling: "",
    quantity: "",
    pickup_date: "",
    special_requests: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
        },
        dispatch({
          type: "RESET_FORM",
          payload: null,
        })
      );
  }

  return (
    <form className="order-form" onSubmit={sendEmail} ref={form}>
      <FormTitle className="order-form__title" text="Order Form" />
      <div className="order-form__input-wrapper">
        <FormInput
          className="first-name"
          name="first_name"
          title="First Name"
          value={state.first_name}
          placeholder="First Name"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_FIRST_NAME",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="last-name"
          name="last_name"
          title="Last Name"
          value={state.last_name}
          placeholder="Last Name"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_LAST_NAME",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="email"
          name="email"
          title="Email Address"
          value={state.email}
          type="email"
          placeholder="Email Address"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_EMAIL",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="cake-flavor"
          name="cake_flavor"
          title="Cake Flavor"
          value={state.cake_flavor}
          placeholder="Cake Flavor"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_CAKE",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="frosting-flavor"
          name="frosting_flavor"
          title="Frosting Flavor"
          value={state.frosting_flavor}
          placeholder="Frosting Flavor"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_FROSTING",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="toppings"
          name="toppings"
          title="Toppings"
          value={state.toppings}
          placeholder="Toppings"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_TOPPINGS",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="filling"
          name="filling"
          title="Filling"
          value={state.filling}
          placeholder="Filling"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_FILLING",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="quantity"
          name="quantity"
          title="Quantity"
          value={state.quantity}
          placeholder="Quantity"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: event.target.value,
            });
          }}
        />
        <FormInput
          className="pickup-date"
          name="pickup_date"
          title="Pickup Date"
          type="text"
          value={state.pickup_date}
          min="10/14/2021"
          placeholder="mm/dd/yyyy"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_DATE",
              payload: event.target.value,
            });
          }}
        />
        <FormTextArea
          className="special-requests-area"
          name="special_requests"
          title="Special Requests"
          type="textarea"
          value={state.special_requests}
          placeholder="Feeling Peticular?"
          onChange={(event) => {
            dispatch({
              type: "UPDATE_REQUESTS",
              payload: event.target.value,
            });
          }}
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
    </form>
  );
}
