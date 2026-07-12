const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/vehicles", require("./routes/vehicleRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

app.listen(5000, () => {
    console.log("Server running");
});