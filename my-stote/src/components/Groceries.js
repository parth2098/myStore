import React from "react";
import "./Groceries.css";
import data from "../data";
function Groceries() {
  return (
    <div className="groceries">
      {/* Using map functionn to get data from data.js */}
      {data.products.map((products) => (
        <div key={products._id} class="card">
          <a href={`/products/${products._id}`}>
            <img
              className="card-img-top card--image"
              src={products.prodImage}
              alt={products.name}
            />
          </a>

          <div class="card-body">
            <div className="card--title">
              <a href={`/products/${products._id}`}>
                <h5 class="card-title">{products.name}</h5>
              </a>
            </div>
            <div className="card--details">
              <p class="card-text">${products.sellPrice}</p>

              <p class="card-text card-lignthrough">${products.price}</p>
            </div>
            <a href="#" class="btn btn-primary card--btn">
              Add To Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Groceries;
