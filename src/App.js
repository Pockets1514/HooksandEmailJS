import "./App.css";
import "./styles/index.scss";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import OrderForm from "./components/order/OrderForm";
import TileGallery from "./components/gallery/TileGallery";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlueberryLemon from "./components/gallery/pictures/BlueberryLemon.jpeg";
import Grasshopper from "./components/gallery/pictures/Grasshopper.jpeg";
import Lemon from "./components/gallery/pictures/Lemon.jpeg";
import PumpkinSpice from "./components/gallery/pictures/PumpkinSpice.jpeg";
import Smores from "./components/gallery/pictures/Smores.jpeg";

export default function App() {
  const [order, setOrder] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cake_flavor: "Lemon",
    frosting_flavor: "Blueberry",
    toppings: "Blueberries",
    filling: "Blueberry jam",
    quantity: "4",
    pickup_date: "",
    src: BlueberryLemon,
  });

  const images = [
    {
      src: BlueberryLemon,
      cake: "Lemon",
      frosting: "Blueberry",
      toppings: "Blueberries",
      filling: "Blueberry jam",
      quantity: 4,
    },
    {
      src: Grasshopper,
      cake: "Chocolate",
      frosting: "Mint",
      toppings: "Andes Chocolate Mints",
      filling: false,
      quantity: 4,
    },
    {
      src: Lemon,
      cake: "Lemon",
      frosting: "Lemon",
      toppings: "Lemon Slices",
      filling: false,
      quantity: 4,
    },
    {
      src: PumpkinSpice,
      cake: "Pumpkin Spice",
      frosting: "Cream Cheese Frosting",
      toppings: "Pumpkin Candy",
      filling: false,
      quantity: 4,
    },
    {
      src: Smores,
      cake: "Chocolate",
      frosting: "Toasted Marshmallow",
      toppings:
        "Graham Cracker Crumble, Mini-Chocolate Chips, & Chocolate Drizzle",
      filling: false,
      quantity: 4,
    },
  ];

  const handleChange = (NewOrder) => {
    setOrder(NewOrder);
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route
            path="/order"
            element={<OrderForm order={order} onChange={handleChange} />}
          />

          <Route
            path="/gallery"
            element={
              <TileGallery
                order={order}
                onChange={handleChange}
                images={images}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
