const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
  addFuel,
  getFuel,
} = require("../controllers/fuelController");

router.post(
  "/",
  protect,
  authorize(ROLES.FLEET_MANAGER, ROLES.DRIVER),
  addFuel
);

router.get(
  "/",
  protect,
  authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
  getFuel
);

module.exports = router;
