import React from "react";
import "./NavbarDropDown.css";

function NavbarDropDown({ title }) {
  return (
    <div className="navbarDropDown">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
    </div>
  );
}

export default NavbarDropDown;
