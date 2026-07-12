const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// mongoose.connect(process.env.DB_URL);

app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/fuel", require("./routes/fuelRoutes"));
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