import React, { Component } from "react";
import GalleryItem from "./GalleryItem";

import BlueberryLemon from "./pictures/BlueberryLemon.jpeg";
import Grasshopper from "./pictures/Grasshopper.jpeg";
import Lemon from "./pictures/Lemon.jpeg";
import PumpkinSpice from "./pictures/PumpkinSpice.jpeg";
import Smores from "./pictures/Smores.jpeg";

class TileGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: BlueberryLemon,
      cake: "Lemon",
      frosting: "Blueberry",
      toppings: "Blueberries",
      filling: "Blueberry jam",
      quantity: 4,
    };
  }
  render() {
    const images = [
      {
        src: BlueberryLemon,
        cake: "lemon",
        frosting: "Blueberry",
        toppings: "Blueberries",
        filling: "Blueberry jam",
        quantity: 4,
      },
      {
        src: Grasshopper,
        cake: "Chocolate",
        frosting: "Mint",
        toppings: "Ande's mints",
        filling: "Mint Creme",
        quantity: 4,
      },
      {
        src: Lemon,
        cake: "Lemon",
        frosting: "Lemon",
        toppings: "Lemon Slice",
        filling: "None",
        quantity: 4,
      },
      {
        src: PumpkinSpice,
        cake: "Pumpkin Spice",
        frosting: "Cream Cheese Frosting",
        toppings: "Pumpkin Candy",
        filling: "None",
        quantity: 4,
      },
      {
        src: Smores,
        cake: "Chocolate",
        frosting: "Toasted Marshmallow",
        toppings:
          "Graham Cracker Crumble, Mini-Chocolate Chips, & Chocolate Drizzle",
        filling: "None",
        quantity: 4,
      },
    ];
    const OrderNow = () => {};

    return (
      <div className="tile-gallery">
        <div className="showcase">
          <img
            className="showcase__img"
            alt="Mmmm, that was good."
            src={this.state.src}
          />
          <div className="showcase__recipe">
            <ul>
              <li>Cake : {this.state.cake}</li>
              <li>Frosting : {this.state.frosting}</li>
              <li>Toppings : {this.state.toppings}</li>
              <li>Filling : {this.state.filling}</li>
            </ul>
            <button to="/order">Order Now!</button>
          </div>
        </div>
        <div className="tiles">
          {images.map((image) => (
            <GalleryItem
              className={`${image.src.slice(14, -14)}-image tile`}
              src={image.src}
              onClick={() =>
                this.setState({
                  src: image.src,
                  cake: image.cake,
                  frosting: image.frosting,
                  toppings: image.toppings,
                  filling: image.filling,
                })
              }
              title={image.src.slice(14, -14)}
              alt="Oops, I must have eaten this one!"
            ></GalleryItem>
          ))}
        </div>
      </div>
    );
  }
}

export default TileGallery;
