import "./Hero.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/Aimage.jpg";
import aisign from "../../assets/images/aisign.svg";

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-container">

          <div className="hero-left">
            <div className="hero-tag">
              <img src={aisign} alt="AI Sign" />
              Where Intelligence Meets the Real World
            </div>

            <h1 className="hero-title">
              We Build AI That Lives <br />
              Beyond the Screen for our <br />
              <span>Digital Partner</span>
            </h1>

            <p className="hero-desc">
              We build smart systems that bring AI into the real world,
              designed for people and businesses, scalable by design,
              and focused on practical, lasting impact.
            </p>

            <button 
              className="hero-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>

          <div className="hero-right">
            <img src={heroImage} alt="AI Cube" />
          </div>

        </div>
      </section>

      <div className="hero-strip">
        <div className="strip-container">

          <div className="strip-tabs">
            <button className="active">What We Do</button>
            <button onClick={() => navigate("/execution")}>Inside MITRA</button>
            <button onClick={() => navigate("/con")}>What We Deliver</button>
          </div>

          <button 
            className="strip-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>

        </div>
      </div>

      <hr style={{border: "1px solid #E0E0E0", margin: "0"}} />
    </>
  );
}

export default Hero;