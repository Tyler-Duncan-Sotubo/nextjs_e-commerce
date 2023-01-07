const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online Shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 1000;

app.listen(port, console.log(`Server is running on port ${port}`));
