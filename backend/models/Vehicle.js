const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        unique: true,
        required: true
    },
    vehicleName: String,
    vehicleType: String,
    maxLoadCapacity: Number,
    odometer: Number,
    acquisitionCost: Number,
    status: {
        type: String,
        enum: ["AVAILABLE", "ON_TRIP", "IN_SHOP", "RETIRED"],
        default: "AVAILABLE"
    },
    region: String
}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);