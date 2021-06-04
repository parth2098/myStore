import { Link } from "react-router-dom";
import { detailsOrder } from "../action/orderActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/myStoreLogo3.png";
import "./OrderDetails.css";

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <></>
  ) : error ? (
    <div className="alert alert-danger">{error}</div>
  ) : (
    <>
      <img
        className="mb-4 logo-img"
        src={logo}
        alt=""
        width="200"
        height="200"
      />{" "}
      <h1>Order {order._id}</h1>
      <div className="orderDetails">
        <ul>
          <div className="card text-center cart__orderSummary">
            <h4 className="card-header">ORDER SUMMARY</h4>
            <ul className="card-body cart__ordersummary--details">
              <li className="cart__orderSummart--list pl-4">
                <h6 className="card-title">items :</h6>
                <h6 className="card-title">${order.itemsPrice.toFixed(2)}</h6>
              </li>
              <li className="cart__orderSummart--list pl-4">
                <h6 className="card-title">Shipping :</h6>
                <h6 className="card-title">
                  ${order.shippingPrice.toFixed(2)}
                </h6>
              </li>
              <li className="cart__orderSummart--list pl-4">
                <h6 className="card-title">Tax :</h6>
                <h6 className="card-title">${order.taxPrice.toFixed(2)}</h6>
              </li>
              <li className="cart__orderSummart--list pl-4">
                <h6 className="card-title">Order Total :</h6>
                <h6 className="card-title">${order.totalPrice.toFixed(2)}</h6>
              </li>
              {order.isDelivered ? (
                <div className="alert alert-primary">
                  Delivered at {order.deliveredAt}
                </div>
              ) : (
                <div className="alert alert-danger">Not Delivered</div>
              )}
              <p className="card-text font-weight-normal">
                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                <strong>Address: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                ,{order.shippingAddress.country}
              </p>
            </ul>

            <div class="card-footer text-muted">{order.paymentMethod}</div>
            {order.isPaid ? (
              <div className="alert alert-primary mt-2">
                Paid at {order.paidAt}
              </div>
            ) : (
              <div className="alert alert-danger mt-2">Not Paid</div>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}
