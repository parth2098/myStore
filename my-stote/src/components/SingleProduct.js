import { Button } from "bootstrap";
import React from "react";
import "./SingleProduct.css";
import data from "../data";

function SingleProduct(props) {
  // props.match.params.id will be same as product id on which user has clicked
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product does not exist</div>;
  }
  return (
    <div className="singleProduct">
      <div className="row">
        <div className="col-md-4">
          <div className="card singleProduct__img">
            <img src={product.prodImage} alt={product.name} />
          </div>
        </div>
        <div className="col-md-8 singleProducr__right">
          <div className="singleProduct__title">
            <h1>{product.name}</h1>
          </div>
          <div className="singleProduct__description">
            <h4 className="mb-3">DESCRIPTION</h4>
            <p className="singleProduct__description--detail">
              {product.description}
            </p>
          </div>
          <div className="singleProduct__price">
            <div className="singleProduct__price--sell font-weight-bold">
              $ {product.sellPrice}
            </div>
            <div className="singleProduct__price--original card-lignthrough pl-5">
              $ {product.price}
            </div>
          </div>
          <div className="btn btn-primary mt-3">ADD TO CART</div>
          {product.stock > 0 ? (
            product.stock >= 3 ? (
              <p className=""></p>
            ) : (
              <div className="alert alert-danger mt-1">
                Only {product.stock} left
              </div>
            )
          ) : (
            <div className="alert alert-danger mt-1">unavalable</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
