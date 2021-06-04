import React, { useEffect } from "react";
import "./Groceries.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productActions";
import Product from "./Product";

function Groceries() {
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="groceries">
      {error
        ? { error }
        : products.map((products) => (
            <Product
              productId={products._id}
              image={products.image}
              productName={products.name}
              productSellPrice={products.sellPrice}
              productPrice={products.price}
            />
          ))}
      {/* Using map functionn to get data from data.js */}
    </div>
  );
}

export default Groceries;
