// mailer.js
const nodemailer = require('nodemailer');

function sendEmail(recipientEmail, content) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password_or_app_specific_password'
    }
  });

  const mailOptions = {
    from: 'noreply@yourdomain.com',
    to: recipientEmail,
    subject: 'Your Subject Here',
    text: content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
