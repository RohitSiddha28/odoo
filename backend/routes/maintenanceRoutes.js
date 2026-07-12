const express = require("express");
const router = express.Router();

const {
    createMaintenance,
    getMaintenances,
    getMaintenanceById,
    updateMaintenance,
    closeMaintenance,
    deleteMaintenance
} = require("../controllers/maintenanceController");

router.post("/", createMaintenance);
router.get("/", getMaintenances);
router.get("/:id", getMaintenanceById);
router.put("/:id", updateMaintenance);
router.patch("/:id/close", closeMaintenance);
router.delete("/:id", deleteMaintenance);

module.exports = router;