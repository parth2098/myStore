import React from "react";
import "./NavbarSecond.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavbarItems from "./NavbarItems";
import NavbarSecondItem from "./NavbarSecondItem";

function NavbarSecond() {
  return (
    <div className="navbarSecond">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbarSecond__content">
        <div className="navbarSecond__sale">
          SALE UP TO 70% OFF. USE CODE "SALE70%" .
          <a className="navVaeSecond__sale--orange" href="#">
            {" "}
            SHOP NOW
          </a>{" "}
        </div>

        <div class="navbarSecond__links" id="navbarText">
          <ul class="navbar-nav navbarSecond__links--left">
            <NavbarSecondItem text="Log In" link="Login" />
            <NavbarSecondItem text="Sign Up" link="Login" />
            <NavbarSecondItem text="Help" link="Login" />
          </ul>
          <ul className="navbar-nav">
            <NavbarSecondItem text={<ShoppingCartIcon />} />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarSecond;
