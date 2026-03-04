import "./Webmid.css";

import customImg from "../../assets/images/webface.svg.svg";
import webAppImg from "../../assets/images/weblapimg.svg.svg";

function Webmid() {
  return (
    <section className="webdeliver-section">
      <div className="webdeliver-container">

        <div className="webdeliver-header">
          <h2>What We Deliver at MiTRA Technology</h2>
          <p>
            Modern web/app platforms—intuitive, scalable, intelligent.
            AI personalizes experiences and automates processes.
          </p>
        </div>

       <div className="webdeliver-row">

  
  <div className="card large image-card">
    <img src={customImg} alt="Custom Website Development" />
    <div className="overlay">
      <h3>Custom Website Development</h3>
      <p>
        Use AI, machine learning, and automation to streamline
        processes, reduce manual work, and improve business efficiency.
      </p>
    </div>
  </div>

  
  <div className="card small purple-card">
    <h3>Responsive Web Design</h3>
    <p>
      Protect systems, networks, and data from cyber threats
      through intelligent AI monitoring and automation.
    </p>
  </div>

</div>


<div className="webdeliver-row">

  <div className="card small purple-card">
    <h3>E-commerce Development</h3>
    <p>
      Protect systems, networks, and data from cyber threats
      through intelligent AI monitoring and automation.
    </p>
  </div>

 
  <div className="card large image-card">
    <img src={webAppImg} alt="Web Application Development" />
    <div className="overlay">
      <h3>Web Application Development</h3>
      <p>
        Design and manage data pipelines and analytics systems
        to turn raw data into actionable business insights.
      </p>
    </div>
  </div>

</div>

        </div>
    
    </section>
  );
}

export default Webmid;