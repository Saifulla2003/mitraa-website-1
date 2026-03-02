import "./AboutusMid.css";
import Aboutmidimg from "../../assets/images/Aboutmidimg.svg";   
import aboutmidtext from "../../assets/images/aboutmidtext.svg"; // quote SVG
import rightImage from "../../assets/images/aboutmidrightimg.svg";  

function AboutusMid() {
  return (
    <section className="about-mid-section">

     
      <div className="about-top">
        <h1>ABOUT US</h1>
        <p>
          We are a technology-driven company delivering innovative IT solutions across AI & automation, cloud and hybrid infrastructure, cybersecurity, and data analytics. Our focus is on helping businesses improve efficiency, enhance security, and make smarter, data-driven decisions. With a customer-first approach, we build scalable and reliable solutions tailored to modern business needs.
        </p>
      </div>

     
      <div className="about-creative-image">
        <img src={Aboutmidimg} alt="Creative Section" />
      </div>

     
      <div className="about-bottom">
        <div className="about-quote">
          <img src={aboutmidtext} alt="Quote Text" />
        </div>

        <div className="about-image">
          <img src={rightImage} alt="About Visual" />
        </div>
      </div>

    </section>
  );
}

export default AboutusMid;