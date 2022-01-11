import "./App.css";
import "./styles/index.scss";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import OrderForm from "./components/order/OrderForm";
import TileGallery from "./components/gallery/TileGallery";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [order, setOrder] = useState({
    first_name: "",
    email: "",
    cake_flavor: "",
    frosting_flavor: "",
    toppings: "",
    filling: "",
    quantity: "",
    pickup_date: "",
  });

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
            element={<OrderForm order={order} onchange={handleChange} />}
          />

          <Route path="/gallery" element={<TileGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
