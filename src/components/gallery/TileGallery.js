import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import BlueberryLemon from "./pictures/BlueberryLemon.jpeg";

export default function TileGallery({ products, onAdd, cart }) {
  const [showcase, updateShowcase] = useState({
    src: BlueberryLemon,
    cake: "lemon",
    frosting: "blueberry",
    toppings: "blueberries",
    filling: "blueberry jam",
    quantity: 6,
    key: 0,
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

          <p> {showcase.filling ? "$2.21" : "$2.00"} each</p>

          <button onClick={() => onAdd(showcase)}>Add to Cart</button>
        </div>
      </div>
      <div className="tiles">
        {products.map((product) => (
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
