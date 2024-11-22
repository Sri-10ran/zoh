/*const nodemailer = require('nodemailer');

// Create a transporter object using Gmail's SMTP
let transporter = nodemailer.createTransport({
  service: 'gmail',  // Use Gmail's SMTP service
  auth: {
    user: 'bathranpro@gmail.com',  // Your Gmail email
    pass: 'jrut ikvu oshd kduv'    // Your Gmail password or app-specific password
  },
  tls: {
    rejectUnauthorized: false  // This is to ensure TLS security is correctly handled
  }
});

// Setup email data
let mailOptions = {
  from: 'bathranpro@gmail.com',
  to: 'bmanikandan24092004@gmail.com',  // Replace with your customer's email
  subject: 'Test Email Subject',
  text: 'This is a test email for your project.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

*/
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email route
app.post('/send-email', (req, res) => {
  const { name, recipient, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bathranpro@gmail.com',
      pass: 'jrut ikvu oshd kduv', // Replace with app-specific password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `From ${name} <bathranpro@gmail.com>`,
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Failed to send email');
    }
    res.status(200).send('Email sent successfully!');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
