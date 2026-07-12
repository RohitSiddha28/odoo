const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.get("/dashboard", reportController.dashboard);
router.get("/fuel-efficiency", reportController.fuelEfficiency);
router.get("/operational-cost", reportController.operationalCost);
router.get("/roi", reportController.roi);
router.get("/vehicle-summary", reportController.vehicleSummary);

module.exports = router;