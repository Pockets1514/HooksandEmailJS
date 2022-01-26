import React, { useState } from "react";
import { Link } from "react-router-dom";
import GalleryOrderForm from "../order/GalleryOrderForm";
import GalleryItem from "./GalleryItem";
import BlueberryLemon from "./pictures/BlueberryLemon.jpeg";

export default function TileGallery(props) {
  const galleryProps = props;
  const [showcase, setShowcase] = useState({
    src: BlueberryLemon,
    filling: "blueberry jam",
    toppings: "blueberries",
    cake: "lemon",
    frosting: "blueberry",
  });

  const updateShowcase = (event) => {
    setShowcase(event);
  };

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
          <Link to="/galleryorder" onClick={updateShowcase}>
            <button>Order Now!</button>
          </Link>
        </div>
      </div>
      <div className="tiles">
        {galleryProps.images.map((image) => (
          <GalleryItem
            className={`${image.src.slice(14, -14)}-image tile`}
            src={image.src}
            onClick={() => {
              setShowcase({
                src: image.src,
                cake: image.cake,
                frosting: image.frosting,
                toppings: image.toppings,
                filling: image.filling,
              });
            }}
            title={image.src.slice(14, -14)}
            alt="Oops, I must have eaten this one!"
          ></GalleryItem>
        ))}
      </div>
    </div>
  );
}
