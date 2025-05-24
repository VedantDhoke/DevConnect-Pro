require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const bookingRoutes = require('./router/booking-router');
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const nodemailer = require('nodemailer');

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/book", bookingRoutes);

app.use(errorMiddleware);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Site is running at port: ${PORT}`);
  });
});
