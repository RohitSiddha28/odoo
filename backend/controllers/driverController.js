const Driver = require("../models/Driver");

// Create Driver
exports.createDriver = async (req, res) => {
    try {
        const driver = await Driver.create(req.body);

        res.status(201).json({
            success: true,
            driver
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get All Drivers
exports.getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();

        res.status(200).json({
            success: true,
            drivers
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get Driver by ID
exports.getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found"
            });
        }

        res.status(200).json({
            success: true,
            driver
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Update Driver
exports.updateDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found"
            });
        }

        res.status(200).json({
            success: true,
            driver
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Delete Driver
exports.deleteDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndDelete(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};