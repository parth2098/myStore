import React, { useEffect, useState } from "react";
import "./Groceries.css";
import axios from "axios";

function Groceries() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="groceries">
      {/* Using map functionn to get data from data.js */}
      {products.map((products) => (
        <div key={products._id} class="card">
          <a href={`/grocery/${products._id}`}>
            <img
              className="card-img-top card--image"
              src={products.prodImage}
              alt={products.name}
            />
          </a>

          <div class="card-body">
            <div className="card--title">
              <a href={`/grocery/${products._id}`}>
                <h5 class="card-title">{products.name}</h5>
              </a>
            </div>
            <div className="card--details">
              <p class="card-text">$ {products.sellPrice}</p>

              <p class="card-text card-lignthrough">$ {products.price}</p>
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
