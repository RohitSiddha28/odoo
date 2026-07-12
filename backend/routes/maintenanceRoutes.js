const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
    createMaintenance,
    getMaintenances,
    getMaintenanceById,
    updateMaintenance,
    closeMaintenance,
    deleteMaintenance
} = require("../controllers/maintenanceController");

router.post(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    createMaintenance
);

router.get(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER, ROLES.FINANCIAL_ANALYST),
    getMaintenances
);

router.get(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER, ROLES.FINANCIAL_ANALYST),
    getMaintenanceById
);

router.put(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    updateMaintenance
);

router.patch(
    "/:id/close",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.SAFETY_OFFICER),
    closeMaintenance
);

router.delete("/:id", protect, authorize(ROLES.FLEET_MANAGER), deleteMaintenance);

module.exports = router;
