const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");
const Trip = require("../models/Trip");

exports.getDashboard = async (req, res) => {
    try {
        const activeVehicles = await Vehicle.countDocuments({ status: "ON_TRIP" });

        const availableVehicles = await Vehicle.countDocuments({ status: "AVAILABLE" });

        const vehiclesInMaintenance = await Vehicle.countDocuments({ status: "IN_SHOP" });

        const activeTrips = await Trip.countDocuments({ status: "DISPATCHED" });

        const pendingTrips = await Trip.countDocuments({ status: "DRAFT" });

        const driversOnDuty = await Driver.countDocuments({ status: "On Trip" });

        const totalVehicles = await Vehicle.countDocuments();

        const fleetUtilization =
            totalVehicles === 0
                ? 0
                : ((activeVehicles / totalVehicles) * 100).toFixed(2);

        res.status(200).json({
            success: true,
            dashboard: {
                activeVehicles,
                availableVehicles,
                vehiclesInMaintenance,
                activeTrips,
                pendingTrips,
                driversOnDuty,
                fleetUtilization
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};