import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({
  productId,
  productImg,
  productName,
  productSellPrice,
  productPrice,
}) {
  return (
    <div>
      <div key={productId} class="card">
        <Link to={`/grocery/${productId}`}>
          <img
            className="card-img-top card--image"
            src={productImg}
            alt={productName}
          />
        </Link>

        <div class="card-body">
          <div className="card--title">
            <Link to={`/grocery/${productId}`}>
              <h5 class="card-title">{productName}</h5>
            </Link>
          </div>
          <div className="card--details">
            <p class="card-text">$ {productSellPrice}</p>

            <p class="card-text card-lignthrough">$ {productPrice}</p>
          </div>
          <Link to="#" class="btn btn-primary card--btn">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
