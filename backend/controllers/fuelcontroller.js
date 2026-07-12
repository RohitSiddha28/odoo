const Fuel = require("../models/Fuel.js");

exports.addFuel = async (req, res) => {
  try {
    const fuel = await Fuel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Fuel log added successfully",
      fuel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getFuel = async (req, res) => {
  try {
    const fuel = await Fuel.find().populate("tripId");

    res.status(200).json({
      success: true,
      fuel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};