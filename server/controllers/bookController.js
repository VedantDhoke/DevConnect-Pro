const nodemailer = require('nodemailer');
const Booking = require('../models/Booking');

const sendBookingEmail = async (toEmail, subject, htmlContent) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,    // Gmail app password (not your real password!)
    },
  });

  await transporter.sendMail({
    from: '"DevConnect Pro" 2022.vedant.dhoke@ves.ac.in',
    to: toEmail,
    subject: subject,
    html: htmlContent,
  });
};


const bookAppointment = async (req, res) => {
  try {
    const { name, email, date, message } = req.body;

    const newBooking = await Booking.create({ name, email, date, message });

    // Send confirmation email to the user
    await sendBookingEmail(
      email,
      'Appointment Confirmation',
      `<h2>Hello ${name},</h2><p>Your appointment is confirmed for <strong>${new Date(date).toLocaleString()}</strong>.</p><p>We’ll be in touch soon!</p>`
    );

    // Send notification email to yourself (optional)
    await sendBookingEmail(
      '2022.vedant.dhoke@ves.ac.in',
      'New Appointment Booked',
      `<p>${name} just booked an appointment on ${new Date(date).toLocaleString()}.</p><p>Message: ${message}</p>`
    );

    res.status(200).json({ message: 'Appointment booked and email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Booking failed.' });
  }
};

module.exports = { bookAppointment };