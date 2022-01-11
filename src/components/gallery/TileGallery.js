import React, { Component } from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

class TileGallery extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const handleOrder = () => {
      console.log(this.props);
    };

    return (
      <div className="tile-gallery">
        <div className="showcase">
          <img
            className="showcase__img"
            alt="Mmmm, that was good."
            src={this.props.src}
          />
          <div className="recipe">
            <h2>{this.props.order.src.slice(14, -14)}</h2>
            <p>
              A {this.props.cake} cupcake with {this.props.frosting} frosting
              {this.props.filling ? `, filled with ${this.props.filling},` : ""}
              {this.props.toppings ? ` and ${this.props.toppings}.` : "."}
            </p>
            <Link to="/order" onClick={handleOrder()}>
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
