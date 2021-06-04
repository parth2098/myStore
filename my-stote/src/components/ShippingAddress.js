import React, { useEffect, useState } from "react";
import logo from "../images/myStoreLogo3.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../action/cartAction";
import CheckoutSteps from "./CheckoutSteps";

function ShippingAddress(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push("/login");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div className="shippingAddress">
      <CheckoutSteps step1 step2></CheckoutSteps>

      <div className="login text-center">
        <form action="" className="form-signin" onSubmit={submitHandler}>
          <img
            className="mb-4 logo-img"
            src={logo}
            alt=""
            width="200"
            height="200"
          />
          <h1 className="h3 mb-3 font-weight-normal">Shipping Address</h1>
          <input
            className="form-control  mb-2"
            type="text"
            id="name"
            placeholder="Full name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            className="form-control  mb-2"
            type="text"
            id="address"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            className="form-control  mb-2"
            type="text"
            id="city"
            placeholder="City"
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            className="form-control  mb-2"
            type="text"
            id="postalCode"
            placeholder="Postal Code"
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <input
            className="form-control  mb-2"
            type="text"
            id="country"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingAddress;
