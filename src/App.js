import "./App.css";
import React from "react";
import Confetti from "react-confetti";
import "@fontsource/kalam";
import "@fontsource/lobster";
import { ReactComponent as Whatsappicon } from "./icons8-whatsapp.svg";
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <>
      <Confetti />
      <div className="canvas-bg"></div>
      <canvas id="world"></canvas>
      <header id="header">
        <div className="container-fluid d-flex justify-content-between align-items-center"></div>
      </header>
      <section id="hero">
        <div className="hero-container">
          <img
            src="https://res.cloudinary.com/website-for-sure/image/upload/c_scale,w_50/v1648818868/lord-ganesh-red_ptdoa0.png"
            className="img-fluid"
            alt="img"
          />
          <h2 className="my-1">Wedding Invitation!</h2>
          <img
            src="https://res.cloudinary.com/website-for-sure/image/upload/ar_1:1,bo_5px_solid_rgb:ffffff,c_fill,g_auto,q_100,r_max,w_150/v1673931483/Shalini-Ashish-HD_figwh8.png"
            className="img-fluid"
            alt="shalini-ashish"
          />
          <h3 className="akhil-jyoti">
            Shalini <span>weds</span> Ashish
          </h3>
          <div>
            <div className="text-center decorated">
              <hr className="date-line" />
              <span>
                <CountdownTimer date="2023-02-06" />
                {/* Feb 06<sup>th</sup>,2023 */}
              </span>
              <hr className="date-line" />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section>
          <div className="container">
            <div className="section-title mb-5">Ceremony</div>
            <div className="row">
              <div className="col-lg-4 col-sm-12 mt-2 mb-2">
                <div className="event-description-container">
                  <div className="event-description">
                    <h3 id="" className="event-name d-block d-md-none">
                      Haldi Ceremony
                    </h3>
                    <div id="" className="event-date">
                      <i className="far fa-calendar-alt"></i>Feb 04, 2023
                      <br />{" "}
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2 mb-2">
                <div className="event-description-container">
                  <div className="event-description">
                    <h3 id="" className="event-name d-block d-md-none">
                      Mehndi Ceremony
                    </h3>
                    <div id="" className="event-date">
                      <i className="far fa-calendar-alt"></i>Feb 05, 2023
                      <br />{" "}
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 mt-2 mb-2">
                <div className="event-description-container">
                  <div className="event-description">
                    <h3 id="" className="event-name d-block d-md-none">
                      Wedding Ceremony
                    </h3>
                    <div id="" className="event-date">
                      <i className="far fa-calendar-alt"></i>Feb 06, 2023
                      <br />{" "}
                    </div>
                    <br />
                    <br />
                    <address>
                      <span id="" className="event-map">
                        <i className="fas fa-map-marker-alt"></i>Narayani
                        Mandapam, Auraiya road, Dibiyapur
                      </span>
                    </address>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2 className="rsvp">RSVP</h2>
            </div>
            <div className="form">
              <div className="php-email-form mt-3 text-center">
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=918126057432&text=Hi%20Shalini%2C%20Congralutions!%20I%20%20will%20be%20attending%20your%20wedding!"
                  className="btn btn-success"
                >
                  <Whatsappicon className="whatsappbtn" />
                  Send RSVP Through Whatsapp
                </a>
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="container">
          <div className="copyright text-center">
            We take pleasure in inviting you and with family to seek the
            blessing on the occasion.
            <br />
            <br />
            Welcome by{" "}
            <strong>
              <span>Prajapati Family </span>
            </strong>
            <br />
            <br />
            <hr />
          </div>
          <div className="credits">Created with awesomeness!</div>
        </div>
      </footer>
    </>
  );
}

export default App;
