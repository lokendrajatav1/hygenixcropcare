const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

// Route imports
const uploadRoutes = require("./routes/uploadRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const soilTestRoutes = require("./routes/soilTestingRoutes");


dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());

// CORS setup – Adjust origin as per deployment
// app.use(
//   cors({
//     origin: "http://localhost:5173", // ✅ Change to your frontend domain in production
//     credentials: true,
//   })
// );

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Serve React build static files
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public","dist", "index.html"));
});



// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/soil-testing", soilTestRoutes);




// Root endpoint
app.get("/", (req, res) => {
  res.send("🌱 API is running...");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("❌", err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message,
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
