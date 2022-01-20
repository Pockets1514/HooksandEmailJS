import "./App.css";
import "./styles/index.scss";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import GalleryOrderForm from "./components/order/GalleryOrderForm";
import CustomOrderForm from "./components/order/CustomOrderForm";
import TileGallery from "./components/gallery/TileGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlueberryLemon from "./components/gallery/pictures/BlueberryLemon.jpeg";
import Grasshopper from "./components/gallery/pictures/Grasshopper.jpeg";
import Lemon from "./components/gallery/pictures/Lemon.jpeg";
import PumpkinSpice from "./components/gallery/pictures/PumpkinSpice.jpeg";
import Smores from "./components/gallery/pictures/Smores.jpeg";

export default function App() {
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

  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/customorder"
            element={<CustomOrderForm images={images} />}
          />
          <Route
            path="/galleryorder"
            element={<GalleryOrderForm images={images} />}
          />
          <Route path="/gallery" element={<TileGallery images={images} />} />
        </Routes>
      </Router>
    </div>
  );
}
