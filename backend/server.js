const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/trips", require("./routes/triproutes"));
app.use("/api/fuel", require("./routes/fuelroutes"));
app.use("/api/drivers", require("./routes/driverRoutes"));
app.use("/api/vehicles", require("./routes/vehicleRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/maintenance", require("./routes/maintenanceRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));


app.get("/health", (req, res) => {
  res.send("API is up and running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
