import React, { Component } from "react";

class Header extends Component {
  render() {
    function MenuToggle() {
      if (document.getElementById("navbar").classList.contains("hidden")) {
        document.getElementById("navbar").classList.remove("hidden");
        document.getElementById("navbar").classList.add("visible");
      } else {
        document.getElementById("navbar").classList.remove("visible");
        document.getElementById("navbar").classList.add("hidden");
      }
    }

    return (
      <div className="header">
        <p>The Boho Bakery of Maine</p>
        <div className="hamburger-wrapper" onClick={MenuToggle}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    );
  }
}

export default Header;
