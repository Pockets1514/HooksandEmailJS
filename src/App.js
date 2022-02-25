import React, { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import ShoppingCart from "./components/cart/ShoppingCart";
import Home from "./components/home/Home";
import OrderForm from "./components/contact/ContactForm";
import TileGallery from "./components/gallery/TileGallery";
// import Payments from "./components/payments/Payments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlueberryLemon from "./components/gallery/pictures/BlueberryLemon.jpeg";
import Grasshopper from "./components/gallery/pictures/Grasshopper.jpeg";
import Lemon from "./components/gallery/pictures/Lemon.jpeg";
import PumpkinSpice from "./components/gallery/pictures/PumpkinSpice.jpeg";
import Smores from "./components/gallery/pictures/Smores.jpeg";
import UnicornPrincess from "./components/gallery/pictures/UnicornPrincess.jpeg";
import CaramelApple from "./components/gallery/pictures/CaramelApple.jpeg";
import Butterscotch from "./components/gallery/pictures/Butterscotch.jpeg";
import ChocolateSaltedCaramel from "./components/gallery/pictures/ChocolateSaltedCaramel.jpeg";
import CoconutRaspberry from "./components/gallery/pictures/CoconutRaspberry.jpeg";
import CookiesAndCream from "./components/gallery/pictures/Cookies&Cream.jpeg";

export default function App() {
  const [cart, updateCart] = useState([]);

  const onAdd = (product) => {
    console.log({ product }, { cart });
    const inCart = cart.find((x) => x.key === product.key);

    if (inCart) {
      console.log("if activated");
      updateCart(
        cart.map((x) =>
          x.key === inCart.key
            ? { ...inCart, quantity: inCart.quantity + 6 }
            : x
        )
      );
    } else {
      console.log("else activated");
      console.log(product);
      updateCart([...cart, { ...product }]);
    }
  };

  const onSubtract = (product) => {
    const inCart = cart.find((x) => x.key === product.key);
    if (inCart.quantity === 6) {
      updateCart(cart.filter((x) => x.key !== product.key));
    } else {
      updateCart(
        cart.map((x) =>
          x.key === product.key
            ? { ...inCart, quantity: inCart.quantity - 6 }
            : x
        )
      );
    }
  };

  const onRemove = (product) => {
    const inCart = cart.find((x) => x.key === product.key);
    if (inCart) {
      updateCart(cart.filter((x) => x.key !== product.key));
    }
  };

  const products = [
    {
      src: BlueberryLemon,
      cake: "lemon",
      frosting: "blueberry",
      toppings: "blueberries",
      filling: "blueberry jam",
      quantity: 6,
      key: 0,
    },
    {
      src: Grasshopper,
      cake: "chocolate",
      frosting: "mint",
      toppings: "andes chocolate mints",
      filling: false,
      quantity: 6,
      key: 1,
    },
    {
      src: Lemon,
      cake: "lemon",
      frosting: "lemon",
      toppings: "lemon slices",
      filling: false,
      quantity: 6,
      key: 2,
    },
    {
      src: PumpkinSpice,
      cake: "pumpkin spice",
      frosting: "cream cheese frosting",
      toppings: "pumpkin candy",
      filling: false,
      quantity: 6,
      key: 3,
    },
    {
      src: Smores,
      cake: "chocolate",
      frosting: "toasted marshmallow",
      toppings:
        "graham cracker crumble, mini-chocolate chips, & chocolate drizzle",
      filling: false,
      quantity: 6,
      key: 4,
    },
    {
      src: UnicornPrincess,
      cake: "funfetti",
      frosting: "almond",
      toppings:
        "assorted pastel sprinkles and candie, featuring unicorn accents",
      filling: false,
      quantity: 6,
      key: 5,
    },
    {
      src: CaramelApple,
      cake: "apple",
      frosting: "caramel",
      toppings: "caremel candies",
      filling: false,
      quantity: 6,
      key: 6,
    },
    {
      src: Butterscotch,
      cake: "butterscotch",
      frosting: "butterscotch",
      toppings: "butterscotch chips",
      filling: false,
      quantity: 6,
      key: 8,
    },
    {
      src: ChocolateSaltedCaramel,
      cake: "chocolate",
      frosting: "caramel",
      toppings: "soft caramels and carmel drizzle",
      filling: false,
      quantity: 6,
      key: 9,
    },
    {
      src: CoconutRaspberry,
      cake: "coconut",
      frosting: "coconut",
      toppings: "a fresh raspberry",
      filling: "raspberry coulis",
      quantity: 6,
      key: 10,
    },
    {
      src: CookiesAndCream,
      cake: "chocolate",
      frosting: "cookies and cream style",
      toppings: "chocolate cookie crumble",
      filling: false,
      quantity: 6,
      key: 11,
    },
  ];

  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/customorder" element={<OrderForm />} />
          <Route
            path="/gallery"
            element={<TileGallery products={products} onAdd={onAdd} />}
          />
        </Routes>
      </Router>
      <ShoppingCart
        cart={cart}
        products={products}
        onAdd={onAdd}
        onRemove={onRemove}
        onSubtract={onSubtract}
      />
    </div>
  );
}
