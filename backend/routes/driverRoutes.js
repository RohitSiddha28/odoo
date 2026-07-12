const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
} = require("../controllers/driverController");

router.post("/", protect, authorize(ROLES.FLEET_MANAGER), createDriver);

router.get(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    getDrivers
);

router.get(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    getDriverById
);

router.put(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    updateDriver
);

router.delete("/:id", protect, authorize(ROLES.FLEET_MANAGER), deleteDriver);

module.exports = router;
