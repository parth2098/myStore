import React from "react";
import { Link } from "react-router-dom";
import NavbarDropDown from "./NavbarDropDown";
import "./NavbarItems.css";

function NavbarItems() {
  return (
    <div className="navbarItems">
      <ul class="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <NavbarDropDown title="Grocery" />
        <NavbarDropDown title="Household" />
        <NavbarDropDown title="Personal Care" />
        <NavbarDropDown title="Packaged Food" />
        <NavbarDropDown title="Bevrages" />
        <li className="nav-item">
          <Link to="#" className="nav-link">
            Gourmet
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            Offer
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarItems;
