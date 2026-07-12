const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const { getReport } = require("../controllers/reportController");

router.get(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
    getReport
);

module.exports = router;

//Example 
// {
//   "success": true,
//   "report": {
//     "totalVehicles": 20,
//     "availableVehicles": 14,
//     "totalDrivers": 18,
//     "activeTrips": 5,
//     "totalFuelCost": 75000,
//     "totalExpense": 32000,
//     "totalOperationalCost": 107000
//   }
// }
