import React from "react";
import "./NavbarSecond.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NavbarItems from "./NavbarItems";
import NavbarSecondItem from "./NavbarSecondItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarSecond() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="navbarSecond">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbarSecond__content">
        <div className="navbarSecond__sale">
          SALE UP TO 70% OFF. USE CODE "SALE70%" .
          <Link className="navbarSecond__sale--orange" to="#">
            {" "}
            SHOP NOW
          </Link>{" "}
        </div>

        <div class="navbarSecond__links" id="navbarText">
          <ul class="navbar-nav navbarSecond__links--left">
            <NavbarSecondItem text="Log In" link="/Login" />
            <NavbarSecondItem text="Sign Up" link="/Login" />
            <NavbarSecondItem text="Help" link="/Login" />
          </ul>
          <ul className="navbar-nav navbarSecond__cart">
            <NavbarSecondItem text={<ShoppingCartIcon />} link="/Cart" />
            {cartItems.length > 0 && (
              <span className="badge badge-cart text-center">
                {cartItems.length}
              </span>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarSecond;
