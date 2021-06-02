import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../action/cartAction";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div classname="cart">
      <h1>Cart</h1>
      <p>
        ADD TO CART : ProductId : {productId} Qty:{qty}
      </p>
    </div>
  );
}

export default Cart;
