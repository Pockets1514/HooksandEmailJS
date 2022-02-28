import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="navbar hidden" id="navbar">
        <div className="navbar__links">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/customorder">
            Contact Form
          </Link>
          <Link className="navlink" to="/gallery">
            Gallery
          </Link>
          <Link className="navlink review-order" to="/order-summary">
            Review Order
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
