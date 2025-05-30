const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const emailStyle = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f9fdfb;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
`;

const headerStyle = `color: #31885e; border-bottom: 2px solid #31885e; padding-bottom: 10px;`;

const sendAdminNotification = async (formData) => {
  return transporter.sendMail({
    from: `"Hygenix Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📨 New Contact Form Submission",
    html: `
      <div style="${emailStyle}">
        <h2 style="${headerStyle}">📩 New Contact Message Received</h2>
        <p><strong>👤 Name:</strong> ${formData.name}</p>
        <p><strong>📧 Email:</strong> ${formData.email}</p>
        <p><strong>📱 Mobile:</strong> ${formData.mobile}</p>
        <p><strong>📝 Message:</strong></p>
        <p style="margin-left: 10px;">${formData.message}</p>
        <hr style="margin-top: 20px;" />
        <p style="font-size: 12px; color: #888;">Received on ${new Date().toLocaleString()}</p>
      </div>
    `,
  });
};

const sendThankYouMail = async (formData) => {
  return transporter.sendMail({
    from: `"Hygenix CropCare" <${process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: "🙏 Thank You for Contacting Us!",
    html: `
      <div style="${emailStyle}">
        <h2 style="${headerStyle}">Thank You, ${formData.name}!</h2>
        <p>We appreciate you contacting <strong>Hygenix CropCare Pvt. Ltd.</strong></p>
        <p>Your message has been received and our team will reach out shortly.</p>

        <p><strong>Your Message:</strong></p>
        <blockquote style="background:#e6f4ea; padding: 15px; border-left: 4px solid #31885e;">
          ${formData.message}
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
  sendAdminNotification,
  sendThankYouMail,
};


//this code with logo

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const emailStyle = `
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #333;
//   background-color: #f9fdfb;
//   padding: 20px;
//   border-radius: 10px;
//   max-width: 600px;
//   margin: auto;
// `;

// const headerStyle = `color: #31885e; border-bottom: 2px solid #31885e; padding-bottom: 10px;`;

// const logoTag = `
//   <div style="text-align: center; margin-bottom: 20px;">
//     <img src="https://yourdomain.com/logo.png" alt="Hygenix Logo" style="width: 150px;" />
//   </div>
// `;

// const sendAdminNotification = async (formData) => {
//   return transporter.sendMail({
//     from: `"Hygenix Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     subject: "📨 New Contact Form Submission",
//     html: `
//       <div style="${emailStyle}">
//         ${logoTag}
//         <h2 style="${headerStyle}">📩 New Contact Message Received</h2>
//         <p><strong>👤 Name:</strong> ${formData.name}</p>
//         <p><strong>📧 Email:</strong> ${formData.email}</p>
//         <p><strong>📱 Mobile:</strong> ${formData.mobile}</p>
//         <p><strong>📝 Message:</strong></p>
//         <p style="margin-left: 10px;">${formData.message}</p>
//         <hr style="margin-top: 20px;" />
//         <p style="font-size: 12px; color: #888;">Received on ${new Date().toLocaleString()}</p>
//       </div>
//     `,
//   });
// };

// const sendThankYouMail = async (formData) => {
//   return transporter.sendMail({
//     from: `"Hygenix CropCare" <${process.env.EMAIL_USER}>`,
//     to: formData.email,
//     subject: "🙏 Thank You for Contacting Us!",
//     html: `
//       <div style="${emailStyle}">
//         ${logoTag}
//         <h2 style="${headerStyle}">Thank You, ${formData.name}!</h2>
//         <p>We appreciate you contacting <strong>Hygenix CropCare Pvt. Ltd.</strong></p>
//         <p>Your message has been received and our team will reach out shortly.</p>

//         <p><strong>Your Message:</strong></p>
//         <blockquote style="background:#e6f4ea; padding: 15px; border-left: 4px solid #31885e;">
//           ${formData.message}
//         </blockquote>

//         <p>📍 <strong>Office:</strong> Hitech City, Hyderabad</p>
//         <p>📧 <strong>Email:</strong> contact@hygenixcropcare.com</p>
//         <p>📞 <strong>Phone:</strong> +91 91234 56789</p>

//         <p style="margin-top: 20px;">Warm regards,<br/><strong>Hygenix CropCare Team</strong></p>
//       </div>
//     `,
//   });
// };

// module.exports = {
//   sendAdminNotification,
//   sendThankYouMail,
// };
