import React, { useEffect } from "react";
import "./Groceries.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productActions";
import Product from "./Product";

function Groceries() {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="groceries">
      {/* Using map functionn to get data from data.js */}
      {products.map((products) => (
        <Product
          productId={products._id}
          productImg={products.prodImage}
          productName={products.name}
          productSellPrice={products.sellPrice}
          productPrice={products.price}
        />
      ))}
    </div>
  );
}

export default Groceries;
