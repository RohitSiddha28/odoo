import express from "express";
import mongoose from "mongoose";
import tripRoutes from "./routes/tripRoutes.js";
import fuelRoutes from "./routes/fuelRoutes.js";

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/trips",tripRoutes);
app.use("/api/fuel",fuelRoutes);

app.listen(5000,()=>{
    console.log("Server Running");
});