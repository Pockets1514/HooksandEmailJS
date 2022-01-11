import React, { Component } from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

class TileGallery extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const handleOrder = (event) => {
      this.props.onChange(event.target.value);
    };

    return (
      <div className="tile-gallery">
        <div className="showcase">
          <img
            className="showcase__img"
            alt="Mmmm, that was good."
            src={this.props.order.src}
          />
          <div className="recipe">
            <h2>{this.props.order.src.slice(14, -14)}</h2>
            <p>
              A {this.props.order.cake_flavor} cupcake with{" "}
              {this.props.order.frosting_flavor} frosting
              {this.props.order.filling
                ? `, filled with ${this.props.order.filling},`
                : ""}
              {this.props.order.toppings
                ? ` and ${this.props.order.toppings}.`
                : "."}
            </p>
            <Link to="/order" onClick={handleOrder}>
              <button>Order Now!</button>
            </Link>
          </div>
        </div>
        <div className="tiles">
          {this.props.images.map((image) => (
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
