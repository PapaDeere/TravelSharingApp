const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/travelApp",
  {
    useMongoClient: true
  }
);

const placeSeed = [
  {
    location: "Phoenix",
    hotel: "Sheraton Grand Phoenix",
    hotelPrice: 345,
    attraction: "baseball game",
    attractionPrice: 45,
    comment:
      "Great sleep for price",
    date: new Date(Date.now())
  },
    {
    location: "Chandler",
    hotel: "Hyatt Place Phoenix/Chandler Fashion Center",
    hotelPrice: 567,
    attraction: null,
    attractionPrice: null,
    comment:
      "Great hotel",
    date: new Date(Date.now())
  }
];
 
db.Place
  .remove({})
  .then(() => db.Place.collection.insertMany(placeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
