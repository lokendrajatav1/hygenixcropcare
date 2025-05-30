const transporter = require("./transporter");

const emailStyle = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f9fdfb;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
`;

const headerStyle = `
  color: #31885e;
  border-bottom: 2px solid #31885e;
  padding-bottom: 10px;
`;

// Email to Admin
const sendSoilTestAdminNotification = async (formData) => {
  return transporter.sendMail({
    from: `"Hygenix Soil Test" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "🌱 New Soil Test Request Received",
    html: `
      <div style="${emailStyle}">
        <h2 style="${headerStyle}">🌿 New Soil Test Submission</h2>
        <p><strong>👤 Name:</strong> ${formData.name || "N/A"}</p>
        <p><strong>📱 Phone:</strong> ${formData.phone || "N/A"}</p>
        <p><strong>📍 Location:</strong> ${formData.location || "N/A"}</p>
        <p><strong>🌾 Crop Type:</strong> ${formData.cropType || "N/A"}</p>
        <p><strong>📝 Description:</strong></p>
        <p style="margin-left: 10px;">${formData.description || "No additional notes provided."}</p>
        <hr style="margin-top: 20px;" />
        <p style="font-size: 12px; color: #888;">Received on ${new Date().toLocaleString()}</p>
      </div>
    `,
  });
};

// Optional: Thank you email to user
const sendSoilTestThankYouMail = async (formData) => {
  if (!formData.email) return;

  return transporter.sendMail({
    from: `"Hygenix Soil Test" <${process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: "🌱 Thank You for Your Soil Test Request!",
    html: `
      <div style="${emailStyle}">
        <h2 style="${headerStyle}">Thank You, ${formData.name || "Farmer"}!</h2>
        <p>We have received your soil testing request and will contact you shortly.</p>

        <p><strong>Your Details:</strong></p>
        <blockquote style="background:#e6f4ea; padding: 15px; border-left: 4px solid #31885e;">
          📍 Location: ${formData.location || "N/A"}<br/>
          🌾 Crop Type: ${formData.cropType || "N/A"}<br/>
          📝 Notes: ${formData.description || "No additional notes provided."}
        </blockquote>

        <p>📍 <strong>Office:</strong> Hitech City, Hyderabad</p>
        <p>📧 <strong>Email:</strong> contact@hygenixcropcare.com</p>
        <p>📞 <strong>Phone:</strong> +91 91234 56789</p>

        <p style="margin-top: 20px;">Warm regards,<br/><strong>Hygenix CropCare Team</strong></p>
      </div>
    `,
  });
};

module.exports = {
  sendSoilTestAdminNotification,
  sendSoilTestThankYouMail,
};
