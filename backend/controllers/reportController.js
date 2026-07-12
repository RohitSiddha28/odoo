const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");
const Trip = require("../models/Trip");
const FuelLog = require("../models/Fuel");
const Expense = require("../models/Expense");

exports.getReport = async (req, res) => {
    try {
        const totalVehicles = await Vehicle.countDocuments();
        const availableVehicles = await Vehicle.countDocuments({ status: "AVAILABLE" });
        const activeTrips = await Trip.countDocuments({ status: "DISPATCHED" });
        const totalDrivers = await Driver.countDocuments();

        const fuelLogs = await FuelLog.find();
        const expenses = await Expense.find();

        let totalFuelCost = 0;
        let totalExpense = 0;

        fuelLogs.forEach(log => {
            totalFuelCost += log.cost;
        });

        expenses.forEach(exp => {
            totalExpense += exp.amount;
        });

        res.status(200).json({
            success: true,
            report: {
                totalVehicles,
                availableVehicles,
                totalDrivers,
                activeTrips,
                totalFuelCost,
                totalExpense,
                totalOperationalCost: totalFuelCost + totalExpense
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};