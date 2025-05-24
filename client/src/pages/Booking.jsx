import React, { useState } from "react";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/book/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Appointment booked successfully!");
      setForm({ name: "", email: "", date: "", message: "" });
    } else {
      alert("data.error");
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Book Appointment</h1>
      </div>

      <div className="container grid grid-two-cols">
        <div className="contact-image">
          <img src="/images/network.png" alt="appointment booking" />
        </div>

        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                id="name"
                required
                autoComplete="off"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                id="email"
                required
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="date">Date & Time</label>
              <input
                type="datetime-local"
                name="date"
                id="date"
                required
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here"
                cols="30"
                rows="6"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button type="submit">Book Appointment</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Booking;
