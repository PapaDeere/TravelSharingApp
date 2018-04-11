const router = require("express").Router();
const placeRoutes = require("./places");

// Book routes
router.use("/places", placeRoutes);

module.exports = router;
