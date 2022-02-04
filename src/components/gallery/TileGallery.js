import React, { useState } from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

export default function TileGallery(order) {
  const [showcase, updateShowcase] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cake: "",
    frosting: "",
    toppings: "",
    filling: "",
    quantity: 6,
    src: "",
  });
  return (
    <div className="tile-gallery">
      <div className="showcase">
        <img
          className="showcase__img"
          alt="Mmmm, that was good."
          src={showcase.src}
        />
        <div className="recipe">
          <h2>{showcase.src.slice(14, -14)}</h2>
          <p>
            A {showcase.cake} cupcake with {showcase.frosting} frosting
            {showcase.filling ? `, filled with ${showcase.filling},` : ""}
            {showcase.toppings
              ? ` and  topped with ${showcase.toppings}.`
              : "."}
          </p>
          <Link to="/customorder">
            <button>Order Now!</button>
          </Link>
        </div>
      </div>
      <div className="tiles">
        {order.products.map((product) => (
          <GalleryItem
            key={product.key}
            className={`${product.src.slice(14, -14)}-product tile`}
            src={product.src}
            onClick={() => updateShowcase(product)}
            title={product.src.slice(14, -14)}
            alt="Oops, I must have eaten this one!"
          />
        ))}
      </div>
    </div>
  );
}
