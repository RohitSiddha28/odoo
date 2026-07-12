const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
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

exports.getTrips = async (req, res) => {
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
};