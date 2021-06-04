import { Button } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import { detailsProduct } from "../action/productActions";

function SingleProduct(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { error, product } = productDetails;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div className="singleProduct">
      {error ? (
        { error }
      ) : (
        <div className="row">
          <div className="col-md-4">
            <div className="card singleProduct__img">
              <img src={product.image} alt={product.name} />
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
            {product.stock > 0 && (
              <>
                <div className="singleProduct__qty">
                  <div className="singleProduct__qty--lable font-weight-bold">
                    Qty :
                  </div>
                  <select
                    className="singleProduct__qty--select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="btn btn-primary mt-3 singleProducr__right--btn"
                  onClick={addToCartHandler}
                >
                  ADD TO CART
                </div>
              </>
            )}

            {/* Veify stocks. */}
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
      )}
      {/* Using map functionn to get data from data.js */}
    </div>
  );
}

export default SingleProduct;
