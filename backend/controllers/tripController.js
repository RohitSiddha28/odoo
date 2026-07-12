import Trip from "../models/Trip.js";

export const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);

    res.status(201).json({
      success: true,
      message: "Trip created successfully",
      trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();

    res.json({
      success: true,
      trips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};git status