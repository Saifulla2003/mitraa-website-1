import "./AboutusEnd.css";
import leftImage from "../../assets/images/aboutendimg.svg"; 
import distinctionImage from "../../assets/images/aboutenddistinction.svg";

function AboutusEnd() {
  return (
    <section className="about-end">

     
      <div className="about-end-container">

       
        <div className="about-end-header">
          <h2>Where Vision Meets Innovation</h2>

          <p>
            We design intelligent systems guided by a clear vision and focused mission. 
            Built to adapt, scale, and deliver lasting business value as your needs evolve.
          </p>
        </div>

       
        <div className="about-end-content">

          
          <div className="about-end-left">
            <img src={leftImage} alt="Vision Illustration" />
          </div>

        
          <div className="about-end-right">

            <div className="about-card vision">
              <h3>Our Vision</h3>
              <p>
                Create intelligent systems that grow with your business. As your 
                needs evolve, the system adapts without rework, chaos, or heavy rebuilds.
              </p>
            </div>

            <div className="about-card mission">
              <h3>Our Mission</h3>
              <p>
                To build intelligent AI solutions that simplify work, enhance decision 
                making, and drive real business impact through innovation.
              </p>
            </div>

          </div>

        </div>
      </div>

      
      <div className="about-distinction">
        <img src={distinctionImage} alt="Our Distinction" />
      </div>

    </section>
  );
}

export default AboutusEnd;