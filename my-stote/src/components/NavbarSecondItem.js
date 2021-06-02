import React from "react";
import { Link } from "react-router-dom";
import "./NavbarSecondItem.css";
function NavbarSecondItem({ link, text }) {
  return (
    <div className="navbarSecondItem">
      <li class="nav-item">
        <Link class="nav-link text-white font-weight-bold" to={link}>
          {text}
        </Link>
      </li>
    </div>
  );
}

export default NavbarSecondItem;
