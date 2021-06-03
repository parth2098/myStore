import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/cartAction";
import { Link } from "react-router-dom";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // Delete Action
  };

  const checkoutHandler = () => {
    // check user sign in or not

    props.history.push("/Login?redirect=shipping");
  };

  return (
    <div classname="cart">
      {cartItems.length === 0 ? (
        <div className="cart_info m-5">
          Cart is Empty. <Link to="/">Go to Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart_info m-5">
            YOUR SHOPPING CART CONTAINS: {cartItems.length}
          </div>
          <div className="cart__details">
            <div className="cart_table">
              <table class="table table-responsive-sm">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">SL No.</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th acope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr>
                      <>
                        <th key={item.product} scope="row">
                          {item.product}
                        </th>
                        <td className="cart__data--image">
                          <Link to={`/grocery/${item.product}`}>
                            <img
                              className="cart__img"
                              src={item.image}
                              alt={item.name}
                            ></img>
                          </Link>
                        </td>
                        <td className="cart__quantity">
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.stock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <Link
                            className="cart__itemName"
                            to={`/grocery/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </td>

                        <td>{item.price}</td>
                        <td
                          type="button"
                          onClick={() => removeFromCartHandler(item.product)}
                          className="cart__remove"
                        >
                          {<CancelPresentationIcon />}
                        </td>
                      </>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart__orderSummary">
              <h4>Order Summary</h4>
              <ul classname="cart__ordersummary--details">
                <li className="cart__orderSummart--list">
                  <div className="list-item">
                    Item(s) Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                    items) :
                  </div>
                  <div className="list-item">
                    ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </div>
                </li>
                <li className="cart__orderSummart--list">
                  <div className="list-item">Shipping Charges :</div>
                  <div className="list-item">$25.00</div>
                </li>
                <li className="cart__orderSummart--list">
                  <div className="list-item">Tax Charges :</div>
                  <div className="list-item">$25.00</div>
                </li>
                <li className="cart__orderSummart--list">
                  <div className="list-item">Total :</div>
                  <div className="list-item">$25.00</div>
                </li>
              </ul>

              <h4
                className="btn cart__button"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </h4>
            </div>
          </div>
        </>
      )}

      <p>
        ADD TO CART : ProductId : {productId} Qty:{qty}
      </p>
    </div>
  );
}

export default Cart;
