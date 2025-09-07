const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for sending email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `📩 Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 20px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="width: 60px; height: 60px; background: #b91c1c; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; margin-bottom: 10px;">
                BP
              </div>
              <h2 style="color: #b91c1c; margin: 0;">🚀 New Contact Message</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #b91c1c;">👤 Name:</td>
                <td style="padding: 10px; color: #333;">${name}</td>
              </tr>
              <tr style="background: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold; color: #b91c1c;">📧 Email:</td>
                <td style="padding: 10px; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #b91c1c;">💬 Message:</td>
                <td style="padding: 10px; color: #333;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #555;">This message was sent from your <strong>Portfolio Contact Form</strong>.</p>
              <a href="https://yourwebsite.com" style="display: inline-block; margin-top: 10px; background: #b91c1c; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none;">Visit Website</a>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "❌ Email sending failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
