import React from "react";
import "./PlaceOrder.css";
import logo from "../images/myStoreLogo3.png";
import { Link } from "@material-ui/core";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";

function PlaceOrder(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <img
        className="mb-4 logo-img"
        src={logo}
        alt=""
        width="200"
        height="200"
      />
      <div className="placeOrder">
        <div class="card text-center cart__orderSummary">
          <h4 class="card-header">ORDER SUMMARY</h4>
          <ul class="card-body cart__ordersummary--details">
            <li className="cart__orderSummart--list pl-4">
              <h6 className="card-title">items :</h6>
              <h6 className="card-title">${cart.itemsPrice.toFixed(2)}</h6>
            </li>
            <li className="cart__orderSummart--list pl-4">
              <h6 className="card-title">Shipping :</h6>
              <h6 className="card-title">${cart.shippingPrice.toFixed(2)}</h6>
            </li>
            <li className="cart__orderSummart--list pl-4">
              <h6 className="card-title">Tax :</h6>
              <h6 className="card-title">${cart.taxPrice.toFixed(2)}</h6>
            </li>
            <li className="cart__orderSummart--list pl-4">
              <h6 className="card-title">Order Total :</h6>
              <h6 className="card-title">${cart.totalPrice.toFixed(2)}</h6>
            </li>

            <p class="card-text font-weight-normal">
              <span className="font-weight-bold">Name:</span>
              {"    "}
              {cart.shippingAddress.fullName} <br /> <strong>Address: </strong>{" "}
              {cart.shippingAddress.address},{cart.shippingAddress.city},{" "}
              {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
            </p>

            <button
              href="#"
              class="btn btn-primary cart__button"
              onClick={placeOrderHandler}
              disabled={cart.cartItems.length === 0}
            >
              Place Order
            </button>
          </ul>
          <div class="card-footer text-muted">{cart.paymentMethod}</div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
