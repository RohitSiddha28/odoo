const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    driver: {
      type: String,
      required: true,
    },

    cargoWeight: {
      type: Number,
      required: true,
      min: 0,
    },

    plannedDistance: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["Pending", "On Trip", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);