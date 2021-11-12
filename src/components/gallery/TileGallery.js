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
      highlighted: BlueberryLemon,
    };
  }
  render() {
    const images = [BlueberryLemon, Grasshopper, Lemon, PumpkinSpice, Smores];
    return (
      <div className="tile-gallery">
        <div className="showcase">
          <img
            className="showcase__img"
            alt="some showcase"
            src={this.state.highlighted}
          />
        </div>
        <div className="tiles">
          {images.map((image) => (
            <GalleryItem
              key={image.index}
              className={`${image.slice(14, -14)}-image tile`}
              src={image}
              onClick={() => this.setState({ highlighted: image })}
              title={image.slice(14, -14)}
              alt="Hey, where's the cream filling?"
            ></GalleryItem>
          ))}
        </div>
      </div>
    );
  }
}

export default TileGallery;
