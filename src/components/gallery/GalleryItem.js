import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    const { onClick, className, title, src, alt } = this.props;
    return (
      <div className="gallery-item">
        <img
          className={`img ${className}-img`}
          src={src}
          alt={alt}
          onClick={onClick}
        ></img>
        <h1 className="img-title">{title}</h1>
      </div>
    );
  }
}

export default GalleryItem;
