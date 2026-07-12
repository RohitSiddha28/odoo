const express = require("express");
const router = express.Router();

const driverController = require("../controllers/driverController");

router.post("/", driverController.createDriver);
router.get("/", driverController.getDrivers);
router.get("/available", driverController.availableDrivers);
router.get("/:id", driverController.getDriverById);
router.put("/:id", driverController.updateDriver);
router.patch("/:id/status", driverController.updateDriverStatus);
router.delete("/:id", driverController.deleteDriver);

module.exports = router;