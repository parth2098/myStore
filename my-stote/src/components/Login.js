import React from "react";
import logo from "../images/myStoreLogo3.png";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function login() {
  return (
    <div className="login text-center">
      <form action="" className="form-signin">
        <img
          className="mb-4 logo-img"
          src={logo}
          alt=""
          width="200"
          height="200"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <Input type="email" id="inputEmail" placeHolder="Email address" />

        <Input type="password" id="inputPassword" placeHolder="Password" />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Button label="Sign In" />
        <div class="forgot">
          <a href="#">Forget Password</a>
        </div>
        <p classname="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    </div>
  );
}

export default login;
