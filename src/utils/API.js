import axios from "axios";

export default {
  // Gets all books
  getPlaces: function() {
    return axios.get("/api/places");
  },
  // Gets the book with the given id
  getPlace: function(id) {
    return axios.get("/api/places/" + id);
  },
  // Deletes the book with the given id
  deletePlace: function(id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves a book to the database
  savePlace: function(placeData) {
    return axios.post("/api/places", placeData);
  }
};
