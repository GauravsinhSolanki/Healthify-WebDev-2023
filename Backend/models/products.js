const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// const productsSchema = new mongoose.Schema({
//   products: [product],
// });

module.exports = mongoose.model("Product", product);
