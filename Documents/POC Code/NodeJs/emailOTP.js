// npm install nodemailer
const nodemailer = require('nodemailer');

// Replace the placeholder values with your own SMTP server configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'surithanda1971@gmail.com', // your email address
    pass: 'rdlo jint fenp qfwy' // your email password or an app-specific password
  }
});

function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const recipientEmail = 'suri_thanda@hotmail.com'; // replace with the recipient's email address

const otp = generateOTP();

const mailOptions = {
  from: 'noreply@matrimonyservices.org', // your email address
  to: recipientEmail,
  subject: 'Your One-Time Password (OTP)',
  text: `Your OTP is: ${otp}`
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
