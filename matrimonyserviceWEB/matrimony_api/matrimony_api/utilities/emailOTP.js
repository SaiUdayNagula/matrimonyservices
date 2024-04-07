// npm install nodemailer
const nodemailer = require("nodemailer");

// Replace the placeholder values with your own SMTP server configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "surithanda1971@gmail.com", // your email address
    pass: "rdlo jint fenp qfwy", // your email password or an app-specific password
  },
});

function sentEmail(recipientEmail, otp) {

  const mailOptions = {
    from: "noreply@matrimonyservices.org", // your email address
    to: recipientEmail,
    subject: "Your One-Time Password (OTP)",
    text: `Your OTP is: ${otp}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = { sentEmail };