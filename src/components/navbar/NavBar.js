import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-wrapper__links">
          <Link className="navlink" to="/home">
            Home
          </Link>
          <Link className="navlink" to="/order">
            OrderForm
          </Link>
          <Link className="navlink" to="/gallery">
            Gallery
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
