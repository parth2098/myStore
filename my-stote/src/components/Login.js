import React, { useEffect, useState } from "react";
import logo from "../images/myStoreLogo3.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../action/userAction";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="login text-center">
      <form action="" className="form-signin" onSubmit={submitHandler}>
        <img
          className="mb-4 logo-img"
          src={logo}
          alt=""
          width="200"
          height="200"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input
          type="email"
          id="email"
          placeHolder="Email address"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeHolder="Password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign In
        </button>
        {error && <div>{error}</div>}
        <div class="forgot">
          <Link to="#">Forget Password</Link>
        </div>
        <div class="forgot">
          <Link to="/signup">New Customer...?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
