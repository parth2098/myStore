import React from "react";
import "./Product.css";
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
        <a href={`/grocery/${productId}`}>
          <img
            className="card-img-top card--image"
            src={productImg}
            alt={productName}
          />
        </a>

        <div class="card-body">
          <div className="card--title">
            <a href={`/grocery/${productId}`}>
              <h5 class="card-title">{productName}</h5>
            </a>
          </div>
          <div className="card--details">
            <p class="card-text">$ {productSellPrice}</p>

            <p class="card-text card-lignthrough">$ {productPrice}</p>
          </div>
          <a href="#" class="btn btn-primary card--btn">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
