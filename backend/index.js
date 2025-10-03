// backend/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const employeeRoutes = require("./routes/employeeRoutes.js");

// Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});