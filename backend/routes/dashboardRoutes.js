const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const { getDashboard } = require("../controllers/dashboardController");

router.get(
  "/",
  protect,
  authorize(
    ROLES.FLEET_MANAGER,
    ROLES.SAFETY_OFFICER,
    ROLES.FINANCIAL_ANALYST
  ),
  getDashboard
);

module.exports = router;
