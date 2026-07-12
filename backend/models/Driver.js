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
      min: 0,
    },

    region: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    emergencyContact: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// Virtual: Check if license has expired
driverSchema.virtual("isLicenseExpired").get(function () {
  return this.licenseExpiryDate < new Date();
});

// Include virtuals in JSON responses
driverSchema.set("toJSON", { virtuals: true });
driverSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Driver", driverSchema);