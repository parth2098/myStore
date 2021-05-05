import React from "react";
import "./NavbarSecondItem.css";
function NavbarSecondItem({ link, text }) {
  return (
    <div className="navbarSecondItem">
      <li class="nav-item">
        <a class="nav-link text-white font-weight-bold" href={link}>
          {text}
        </a>
      </li>
    </div>
  );
}

export default NavbarSecondItem;
