const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Driver name is required"],
      trim: true,
    },

    licenseNumber: {
      type: String,
      required: [true, "License number is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },

    licenseCategory: {
      type: String,
      required: true,
      enum: ["LMV", "HMV", "MCWG", "Transport", "Other"],
    },

    licenseExpiryDate: {
      type: Date,
      required: true,
    },

    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },

    safetyScore: {
      type: Number,
      default: 100,
      min: 0,
      max: 100,
    },

    status: {
      type: String,
      enum: ["Available", "On Trip", "Off Duty", "Suspended"],
      default: "Available",
    },

    tripsCompleted: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);