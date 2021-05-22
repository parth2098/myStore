import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Jai Swaminarayan");
});

app.listen(3000, () => {
  console.log("Server is at http://localhost:3000");
});
