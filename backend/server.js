const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");

const products = require("./products");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("Welcome to our online Shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 1000;
const uri = process.env.MONGODB_URI;

app.listen(port, console.log(`Server is running on port ${port}`));

mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB connect succesful"))
  .catch((error) => console.log("Mongo DB connect succesful", error));
