import React from "react";
import "./Cart.css";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
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
