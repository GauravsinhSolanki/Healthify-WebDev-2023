// Author: Gauravsinh Bharatsinh Solanki B00932065

const mongoose = require("mongoose");

const hospital = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hospital", hospital);
