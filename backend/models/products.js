const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    featuredImg: { type: String },
    tag: { type: String },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: String, required: true },
    countInStock: { type: String, required: true },
    description: { type: String, required: true },
    // images: [
    //   {
    //     _id: false,
    //     img: {
    //       type: "string",
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
exports.Product = Product;
