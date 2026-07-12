const express = require("express");
const router = express.Router();

const { getReport } = require("../controllers/reportController");

router.get("/", getReport);

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