const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  deal_type: { type: String, required: true },
  deal_city: { type: String, required: true },
  deal_state: { type: String, required: true },
  deal_locationName: { type: String, required: true },
  deal_price: { type: Number, required: false},
  deal_url: { type: String, required: false },
  deal_comments: String,
  date: { type: Date, default: Date.now }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
