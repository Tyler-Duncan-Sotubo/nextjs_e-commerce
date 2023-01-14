const express = require("express");
const { Product } = require("../models/products");

const router = express.Router();

router.post("/", async (req, res) => {
  let product = new Product({
    // featuredImg: req.body.featuredImg,
    // tag: req.body.tag,
    name: req.body.name,
    // slug: req.body.slug,
    // category: req.body.category,
    image: req.body.image,
    // price: req.body.price,
    // brand: req.body.brand,
    // rating: req.body.rating,
    // numReviews: req.body.numReviews,
    // countInStock: req.body.countInStock,
    // description: req.body.description,
    // images: [
    //   {
    //     img: req.body.images[0].img,
    //   },
    //   {
    //     img: req.body.images[1].img,
    //   },
    //   {
    //     img: req.body.images[2].img,
    //   },
    //   {
    //     img: req.body.images[3].img,
    //   },
    //   {
    //     img: req.body.images[4].img,
    //   },
    //   {
    //     img: req.body.images[5].img,
    //   },
    // ],
  });

  product = await product.save();
  res.send(product);
});

module.exports = router;
