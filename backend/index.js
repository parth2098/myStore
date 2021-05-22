import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Jai Swaminarayan");
});

app.listen(3000, () => {
  console.log("Server is at http://localhost:3000");
});
