// routes/booking.js
const express = require("express");
const router = express.Router();
const { bookAppointment } = require("../controllers/bookController")

// const Booking = require("../models/Booking");//

// router.post("/book", async (req, res) => {
//   try {
//     const { name, email, message, date } = req.body;

//     const newBooking = new Booking({ name, email, message, date });
//     await newBooking.save();

//     res.status(201).json({ message: "Appointment booked successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to book appointment" });
//   }
// });
router.post("/book", bookAppointment);

module.exports = router;
