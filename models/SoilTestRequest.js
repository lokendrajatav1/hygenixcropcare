const mongoose = require("mongoose");

const SoilTestRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    cropType: { type: String, required: true },
    description: { type: String },
    email: { type: String }, // optional email field for thank-you email
  },
  { timestamps: true }
);

module.exports = mongoose.model("SoilTestRequest", SoilTestRequestSchema);
