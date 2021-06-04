import "./Payment.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../action/cartAction";
import CheckoutSteps from "./CheckoutSteps";
import { Link } from "@material-ui/core";
import logo from "../images/myStoreLogo3.png";

function Payment(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <div className="payment">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <form action="" className="form-signin" onSubmit={submitHandler}>
        <img
          className="mb-4 logo-img"
          src={logo}
          alt=""
          width="200"
          height="200"
        />
        <h1 className="h3 mb-3 font-weight-normal">
          Select Your Payment Method
        </h1>
        <div className="form-check">
          <input
            type="radio"
            id="payple"
            value="Payple"
            name="paymentMethod"
            checked
            className="form-check-input"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="other"
            value="Other"
            name="paymentMethod"
            checked
            className="form-check-input"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paypal">Other</label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Payment;
