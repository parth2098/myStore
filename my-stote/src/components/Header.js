import React from "react";
import "./Header.css";
import CallIcon from "@material-ui/icons/Call";
import logo from "../images/myStoreLogo3.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__contact">
        <CallIcon />
        <p>Order Online or Call us : +1 819 999 9999</p>
      </div>

      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="My Store" />
        </Link>
      </div>

      <div className="header__search">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
