const SoilTestRequest = require("../models/SoilTestRequest");
const {
  sendSoilTestAdminNotification,
  sendSoilTestThankYouMail,
} = require("../utils/soilTestEmail");

const createSoilTestRequest = async (req, res) => {
  try {
    const { name, phone, location, cropType, description, email } = req.body;

    const newRequest = new SoilTestRequest({ name, phone, location, cropType, description, email });
    await newRequest.save();

    // Send emails
    await sendSoilTestAdminNotification(newRequest);
    await sendSoilTestThankYouMail(newRequest);

    res.status(200).json({ message: "✅ Request saved and emails sent" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "❌ Failed to process request", error: error.message });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const requests = await SoilTestRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("❌ Error fetching requests:", error);
    res.status(500).json({ message: "❌ Failed to fetch requests", error: error.message });
  }
};

module.exports = { createSoilTestRequest, getAllRequests };
