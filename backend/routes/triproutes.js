const express = require("express");
const router = express.Router();

const {
  createTrip,
  getTrips,
  // completeTrip
} = require("../controllers/tripController");

router.post("/", createTrip);
router.get("/", getTrips);
// router.put("/:id", completeTrip);

module.exports = router;