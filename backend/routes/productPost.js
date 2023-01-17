const express = require("express");
const { Product } = require("../models/products");

const router = express.Router();
router.post("/", async (req, res) => {
  const {
    featuredImg,
    tag,
    name,
    slug,
    category,
    image,
    price,
    brand,
    rating,
    numReviews,
    countInStock,
    description,
  } = req.body.newData;
  let product = new Product({
    featuredImg,
    tag,
    name,
    slug,
    category,
    image,
    price,
    brand,
    rating,
    numReviews,
    countInStock,
    description,
  });

  product = await product.save();
  res.send(product);
});

module.exports = router;
