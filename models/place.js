const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  location: { type: String, required: true },
  hotel: { type: String, required: false },
  hotelPrice: { type: Number, required: false},
  attraction: { type: String, required: false },
  attractionPrice: { type: Number, required: false},  
  comment: String,
  date: { type: Date, default: Date.now }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
