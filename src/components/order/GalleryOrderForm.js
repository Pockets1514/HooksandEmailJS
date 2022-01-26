// import emailjs from "emailjs-com";
// import React, { useRef, useState } from "react";
// import { FormInput, FormButton, FormTitle } from "./FormElements";

// export default function GalleryOrderForm(props) {

//   const handleChange = (event) => {
//     setOrder(event.target);
//   };

//   const form = useRef();

//   function sendEmail(e) {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "BohoToGoInbox",
//         "bohotogo_order_request",
//         form.current,
//         "user_RJlVugmVGN7JwuDn1zbTd"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert(
//             "Your request is on it's way to my inbox, but I am only one woman. Please allow up to one week for a response."
//           );
//         },
//         (error) => {
//           console.log(error.text);
//           alert(
//             "Oh no :( There was an error with your request. Please try again.  If this continues to occur email bohotogomaine@gmail.com"
//           );
//         }
//         // dispatch({
//         //   type: "RESET_FORM",
//         //   payload: null,
//         // })
//       );
//   }

//   return (
//     <form className="order-form" onSubmit={sendEmail} ref={form}>
//       <FormTitle className="order-form__title" text="Order Form" />
//       <div className="order-form__input-wrapper">
//         <FormInput
//           className="first-name"
//           name="first_name"
//           title="First Name"
//           value={order.first_name}
//           placeholder="First Name"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="last-name"
//           name="last_name"
//           title="Last Name"
//           value={order.last_name}
//           placeholder="Last Name"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="email"
//           name="email"
//           title="Email Address"
//           value={order.email}
//           type="email"
//           placeholder="Email Address"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="cake-flavor"
//           name="cake_flavor"
//           title="Cake Flavor"
//           value={order.cake_flavor}
//           placeholder="Cake Flavor"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="frosting-flavor"
//           name="frosting_flavor"
//           title="Frosting Flavor"
//           value={order.frosting_flavor}
//           placeholder="Frosting Flavor"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="toppings"
//           name="toppings"
//           title="Toppings"
//           value={order.toppings}
//           placeholder="Toppings"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="filling"
//           name="filling"
//           title="Filling"
//           value={order.filling}
//           placeholder="Filling"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="quantity"
//           name="quantity"
//           title="Quantity"
//           value={order.quantity}
//           placeholder="Quantity"
//           onChange={handleChange}
//         />
//         <FormInput
//           className="pickup-date"
//           name="pickup_date"
//           title="Pickup Date"
//           type="text"
//           value={order.pickup_date}
//           min="10/14/2021"
//           placeholder="mm/dd/yyyy"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="order-form-image-wrapper">
//         <img
//           id="order-form-image"
//           src={order.src}
//           alt="Looking for Inspiration? Check out the Gallery."
//         ></img>
//       </div>
//       <div className="form-button-wrapper">
//         <FormButton
//           className="order-form__submit-order "
//           name="submit"
//           title="Submit Order"
//           type="Submit"
//           largeButton
//         />
//       </div>
//     </form>
//   );
// }
