import React from "react";
import NavbarDropDown from "./NavbarDropDown";
import "./Navbar.css";
import NavbarItems from "./NavbarItems";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse navbar__title"
        id="navbarSupportedContent"
      >
        <NavbarItems />
      </div>
    </div>
  );
}

export default Navbar;
