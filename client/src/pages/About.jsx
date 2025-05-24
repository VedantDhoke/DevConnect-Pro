import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Welcome{" "}
                {user ? `${user.username} to our website` : `to our website`}
              </p>
              <p>Welcome to DevConnect Pro</p>
              <h1>Why Choose Us ?</h1>
              <p>
                Expertise: Our team of seasoned professionals leverages
                extensive IT knowledge to deliver innovative and reliable
                solutions.
              </p>
              <p>
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your
                specific needs and objectives.
              </p>
              <p>
                Customer Focus: Your satisfaction is our top priority. We are
                committed to providing exceptional customer service, ensuring
                that you receive the support you need, whenever you need it.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: You can count on us to deliver consistent, reliable
                services that keep your operations running smoothly and
                securely.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">Connect Now</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </NavLink>
              </div>
            </div>

            {/* img  */}
            <div className="hero-image about">
              <img
                src="/images/about.png"
                alt="About"
                height="500"
                width="400"
              />
            </div>
          </div>
        </section>
      </main>

      {/* section-analytics  */}

      <div className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Company Registers</p>
          </div>
          <div className="div1">
            <h2>150+</h2>
            <p> Projects Done</p>
          </div>
          <div className="div1">
            <h2>250+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>650K+</h2>
            <p>Youtube Subscribers</p>
          </div>
        </div>
      </div>
    </>
  );
};
