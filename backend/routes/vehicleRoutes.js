const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
    createVehicle,
    getVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle
} = require("../controllers/vehicleController.js");

router.post("/", protect, authorize(ROLES.FLEET_MANAGER), createVehicle);

router.get(
    "/",
    protect,
    authorize(
        ROLES.FLEET_MANAGER,
        ROLES.DRIVER,
        ROLES.SAFETY_OFFICER,
        ROLES.FINANCIAL_ANALYST
    ),
    getVehicles
);

router.get(
    "/:id",
    protect,
    authorize(
        ROLES.FLEET_MANAGER,
        ROLES.DRIVER,
        ROLES.SAFETY_OFFICER,
        ROLES.FINANCIAL_ANALYST
    ),
    getVehicleById
);

router.put(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    updateVehicle
);

router.delete("/:id", protect, authorize(ROLES.FLEET_MANAGER), deleteVehicle);

module.exports = router;
