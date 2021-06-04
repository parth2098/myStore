import React, { useEffect, useState } from "react";
import logo from "../images/myStoreLogo3.png";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../action/userAction";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="signup">
      <div className="login text-center">
        <form action="" className="form-signin">
          <img
            className="mb-4 logo-img"
            src={logo}
            alt=""
            width="200"
            height="200"
          />
          <h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
          {error && <div>{error}</div>}
          <input
            className="form-control  mb-2"
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="form-control  mb-2"
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={submitHandler}
          >
            Sign Up
          </button>

          <div class="forgot">
            Already Have an Account ?{" "}
            <Link to={`/login?redirect=${redirect}`}>Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
