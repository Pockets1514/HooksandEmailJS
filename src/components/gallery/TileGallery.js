import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      filling: "Blueberry Jam",
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
      <div className="tile-gallery">
        <div className="showcase">
          <img
            className="showcase__img"
            alt="Mmmm, that was good."
            src={this.state.src}
          />
          <div className="showcase__recipe">
            <p>
              A {this.state.cake} cupcake with {this.state.frosting} frosting
              {this.state.filling ? `, filled with ${this.state.filling},` : ""}
              {this.state.toppings ? ` and ${this.state.toppings}.` : "."}
            </p>
            <Link to="/order">
              <button>Order Now!</button>
            </Link>
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
