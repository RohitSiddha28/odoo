const express = require("express"); 
const app = express(); 

app.use(express.json());

// Routes
app.use("/api/drivers", require("./routes/driverRoutes"));
// app.use("/api/expenses", require("./routes/expenseRoutes"));

app.get("/", (req, res) => { 
  res.send("Hello World"); 
});

const PORT = 5000; 

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`); 
});