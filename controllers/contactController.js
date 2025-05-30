const Contact = require("../models/contactModel");
const {
  sendContactAdminNotification,
  sendContactThankYouMail,
} = require("../utils/contactEmail");

// Submit contact form (POST)
const submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Send emails
    await sendContactAdminNotification(req.body);
    await sendContactThankYouMail(req.body);

    res.status(200).json({ message: "✅ Message saved & emails sent" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "❌ Submission failed", error: error.message });
  }
};

// Get all contacts (GET)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ message: "Failed to fetch contacts", error: error.message });
  }
};

module.exports = { submitContact, getAllContacts };
