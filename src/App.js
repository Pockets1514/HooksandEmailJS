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
import UnicornPrincess from "./components/gallery/pictures/UnicornPrincess.jpeg";
import CaramelApple from "./components/gallery/pictures/CaramelApple.jpeg";
import Butterscotch from "./components/gallery/pictures/Butterscotch.jpeg";
import ChocolateSaltedCaramel from "./components/gallery/pictures/ChocolateSaltedCaramel.jpeg";
import CoconutRaspberry from "./components/gallery/pictures/CoconutRaspberry.jpeg";
import CookiesAndCream from "./components/gallery/pictures/Cookies&Cream.jpeg";

export default function App() {
  const images = [
    {
      src: BlueberryLemon,
      cake: "lemon",
      frosting: "blueberry",
      toppings: "blueberries",
      filling: "blueberry jam",
      quantity: 6,
    },
    {
      src: Grasshopper,
      cake: "chocolate",
      frosting: "mint",
      toppings: "andes chocolate mints",
      filling: false,
      quantity: 6,
    },
    {
      src: Lemon,
      cake: "lemon",
      frosting: "lemon",
      toppings: "lemon slices",
      filling: false,
      quantity: 6,
    },
    {
      src: PumpkinSpice,
      cake: "pumpkin spice",
      frosting: "cream cheese frosting",
      toppings: "pumpkin candy",
      filling: false,
      quantity: 6,
    },
    {
      src: Smores,
      cake: "chocolate",
      frosting: "toasted marshmallow",
      toppings:
        "graham cracker crumble, mini-chocolate chips, & chocolate drizzle",
      filling: false,
      quantity: 6,
    },
    {
      src: UnicornPrincess,
      cake: "funfetti",
      frosting: "almond",
      toppings:
        "assorted pastel sprinkles and candie, featuring unicorn accents",
      filling: false,
      quantity: 6,
    },
    {
      src: CaramelApple,
      cake: "apple",
      frosting: "caramel",
      toppings: "caremel candies",
      filling: false,
      quantity: 6,
    },
    {
      src: Butterscotch,
      cake: "butterscotch",
      frosting: "butterscotch",
      toppings: ", can you believe it, butterscotch chips",
      filling: false,
      quantity: 6,
    },
    {
      src: ChocolateSaltedCaramel,
      cake: "chocolate",
      frosting: "caramel",
      toppings: "soft caramels and carmel drizzle",
      filling: false,
      quantity: 6,
    },
    {
      src: CoconutRaspberry,
      cake: "coconut",
      frosting: "coconut",
      toppings: "a fresh raspberry",
      filling: "raspberry coulis",
      quantity: 6,
    },
    {
      src: CookiesAndCream,
      cake: "chocolate",
      frosting: "cookies and cream style",
      toppings: "chocolate cookie crumble",
      filling: false,
      quantity: 6,
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
