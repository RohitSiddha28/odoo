import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
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
    },
    plannedDistance: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "On Trip", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);