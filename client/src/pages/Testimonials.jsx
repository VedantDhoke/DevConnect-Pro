import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">What Our Clients Say</h1>
      </div>

      <div className="container grid grid-three-cols">
        {testimonials.map((t, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-img">
                <img src={t.avatar} alt={t.name} width="250" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p className="role">{t.name}</p>
                  <p className="role">{t.role}</p>
                </div>
                <br></br>
                <br></br>
                <p className="role1">{t.message}</p>
                {/* <p>{description}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
