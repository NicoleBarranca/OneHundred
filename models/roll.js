const mongoose = require("mongoose");

const sushiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  ingredients: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Roll", sushiSchema);
