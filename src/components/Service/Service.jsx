import "./Service.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import robotImage from "../../assets/images/roboman.svg"; 
import serviceBg from "../../assets/images/servicebg.svg"; 

function Services() {
  const navigate = useNavigate();
  return (
    <section className="services-section"   style={{ backgroundImage: `url(${serviceBg})` }}
>
      <div className="services-container">

        <h2 className="services-title">
          One Service Partner. Complete Delivery
        </h2>

        <div className="services-grid">

         
          <div className="service-card">
            <div>
              <h3>Generative AI Solutions</h3>
              <p>
                We build AI systems that understand needs, assist decisions,
                adapt intelligently, and scale with your business.
              </p>
            </div>
            <button className="service-btn"   onClick={() => navigate("/genai")} >Learn more</button>
          </div>

          
          <div className="service-feature">
            <img src={robotImage} alt="AI Robot" />
            <div className="feature-overlay">
              <h3>AI for small business</h3>
              <p>
                Grow your customer base with communications software designed
                for up to 300 employees.
              </p>
              <button className="feature-btn">Learn more</button>
            </div>
          </div>

         
          <div className="service-card">
            <div>
              <h3>Web & Application Development</h3>
              <p>
                We design and develop modern web and application platforms
                powered by intelligent, scalable AI solutions.
              </p>
            </div>
            <button className="service-btn" onClick={() => navigate("/web")}>Learn more</button>
          </div>

          
          <div className="service-card">
            <div>
              <h3>Enterprise Agile Development</h3>
              <p>
                We help enterprises move faster without losing control,
                governance, security, compliance, or operational visibility globally.
              </p>
            </div>
            <button className="service-btn">Learn more</button>
          </div>

       
          <div className="service-card">
            <div>
              <h3>Cyber Security</h3>
              <p>
                Security isn’t an add-on; it’s embedded into everything we design,
                build, and deliver.
              </p>
            </div>
            <button className="service-btn">Learn more</button>
          </div>

         
          <div className="service-card">
            <div>
              <h3>Blockchain (Web3)</h3>
              <p>
                We create blockchain solutions where trust, transparency,
                and automation truly matter for secure digital ecosystems.
              </p>
            </div>
            <button className="service-btn">Learn more</button>
          </div>

          
          <div className="service-card">
            <div>
              <h3>Enterprise Technology & Performance</h3>
              <p>
                We optimize enterprise systems to perform better,
                scale smarter, and run lighter.
              </p>
            </div>
            <button className="service-btn">Learn more</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;