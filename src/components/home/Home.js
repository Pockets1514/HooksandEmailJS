import React, { Component } from "react";
import Logo from "../header/BohoLogo.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src={Logo} alt="" />
        <div className="greeting-wrapper">
          <span>
            Handcrafted cupcakes made locally in Gardiner, Maine for your small
            events. Offering contactless pay and pickup from my home. I’ve been
            creating cupcakes from my home since 2015. Specializing in made from
            scratch cupcakes for small events and the occasional larger event.
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
