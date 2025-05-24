import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World's Best IT Company</p>
              <h1>Welcome to DevConnect Pro</h1>
              <p>
                Are you ready to take your bussiness to next level with
                cutting-edge It solutions? Look no further! At DevConnect Pro,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
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

            {/* hero img */}

            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section analytics */}

      <div className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </div>

      {/* 3rd section  */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero img */}

          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Unlock the full potential of your IT infrastructure with enhanced
              efficiency and top-notch security! Contact us now for a
              complimentary consultation and explore how DevConnect Pro can
              propel your business forward in the digital era. Let's innovate
              and thrive together!
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
        </div>
      </section>
    </>
  );
};
