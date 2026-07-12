<<<<<<< HEAD
import express from "express";
import mongoose from "mongoose";
import tripRoutes from "./routes/tripRoutes.js";
import fuelRoutes from "./routes/fuelRoutes.js";

=======
const express = require("express");
>>>>>>> c379469ea18108c54e0d3b960f81d8510bd25830
const app = express();

app.use(express.json());

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URI);

app.use("/api/trips",tripRoutes);
app.use("/api/fuel",fuelRoutes);

app.listen(5000,()=>{
    console.log("Server Running");
=======
app.use("/api/vehicles", require("./routes/vehicleRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

app.listen(5000, () => {
    console.log("Server running");
>>>>>>> c379469ea18108c54e0d3b960f81d8510bd25830
});