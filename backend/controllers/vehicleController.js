const Vehicle = require("../models/Vehicle");

// Create Vehicle
exports.createVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);

        res.status(201).json({
            success: true,
            message: "Vehicle created successfully",
            vehicle
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Registration number already exists"
            });
        }

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get All Vehicles
exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();

        res.status(200).json({
            success: true,
            count: vehicles.length,
            vehicles
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get Vehicle by ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);

        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehicle not found"
            });
        }

        res.status(200).json({
            success: true,
            vehicle
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update Vehicle
exports.updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehicle not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Vehicle updated successfully",
            vehicle
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Delete Vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: "Vehicle not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Vehicle deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};