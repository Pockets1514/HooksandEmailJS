import React from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

export default function TileGallery(order) {
  const updateShowcase = (image) => {
    console.log(order);
    console.log(image);
    order.setOrder(image);
  };

  return (
    <div className="tile-gallery">
      <div className="showcase">
        <img
          className="showcase__img"
          alt="Mmmm, that was good."
          src={order.order.src}
        />
        <div className="recipe">
          <h2>{order.order.src.slice(14, -14)}</h2>
          <p>
            A {order.order.cake} cupcake with {order.order.frosting} frosting
            {order.order.filling ? `, filled with ${order.order.filling},` : ""}
            {order.order.toppings
              ? ` and  topped with ${order.order.toppings}.`
              : "."}
          </p>
          <Link to="/customorder">
            <button>Order Now!</button>
          </Link>
        </div>
      </div>
      <div className="tiles">
        {order.images.map((image) => (
          <GalleryItem
            key={image.key}
            className={`${image.src.slice(14, -14)}-image tile`}
            src={image.src}
            onClick={() => updateShowcase(image)}
            title={image.src.slice(14, -14)}
            alt="Oops, I must have eaten this one!"
          />
        ))}
      </div>
    </div>
  );
}
