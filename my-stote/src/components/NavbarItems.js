import React from "react";
import NavbarDropDown from "./NavbarDropDown";
import "./NavbarItems.css";

function NavbarItems() {
  return (
    <div className="navbarItems">
      <ul class="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <NavbarDropDown title="Grocery" />
        <NavbarDropDown title="Household" />
        <NavbarDropDown title="Personal Care" />
        <NavbarDropDown title="Packaged Food" />
        <NavbarDropDown title="Bevrages" />
        <li className="nav-item">
          <a href="#" className="nav-link">
            Gourmet
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Offer
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarItems;
