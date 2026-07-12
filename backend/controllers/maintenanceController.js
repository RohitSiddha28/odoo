const Maintenance = require("../models/Maintenance");
const Vehicle = require("../models/Vehicle");

// Create Maintenance
exports.createMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.create(req.body);

        await Vehicle.findByIdAndUpdate(
            req.body.vehicle,
            { status: "IN_SHOP" }
        );

        res.status(201).json({
            success: true,
            maintenance
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get All Maintenance
exports.getMaintenances = async (req, res) => {
    try {
        const maintenances = await Maintenance.find().populate("vehicle");

        res.status(200).json({
            success: true,
            maintenances
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get Maintenance by ID
exports.getMaintenanceById = async (req, res) => {
    try {
        const maintenance = await Maintenance.findById(req.params.id).populate("vehicle");

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance not found"
            });
        }

        res.status(200).json({
            success: true,
            maintenance
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update Maintenance
exports.updateMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance not found"
            });
        }

        res.status(200).json({
            success: true,
            maintenance
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Close Maintenance
exports.closeMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findById(req.params.id);

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance not found"
            });
        }

        maintenance.status = "COMPLETED";
        await maintenance.save();

        await Vehicle.findByIdAndUpdate(
            maintenance.vehicle,
            { status: "AVAILABLE" }
        );

        res.status(200).json({
            success: true,
            message: "Maintenance completed",
            maintenance
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Delete Maintenance
exports.deleteMaintenance = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};