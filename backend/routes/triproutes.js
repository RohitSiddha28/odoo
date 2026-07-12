const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
  createTrip,
  getTrips,
  // completeTrip
} = require("../controllers/tripController");

router.post("/", protect, authorize(ROLES.FLEET_MANAGER), createTrip);

router.get(
  "/",
  protect,
  authorize(ROLES.FLEET_MANAGER, ROLES.DRIVER, ROLES.SAFETY_OFFICER),
  getTrips
);
// router.put("/:id", completeTrip);

module.exports = router;
