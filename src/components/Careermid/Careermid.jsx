import "./Careermid.css";

import img1 from "../../assets/images/career1.svg";
import img2 from "../../assets/images/career2.svg";
import img3 from "../../assets/images/career3.svg";

function Careermid() {
  return (
    <section className="careers-mid">

      <h2 className="careers-mid-title">
        Why join MiTRA ?
      </h2>

      <div className="careers-mid-grid">

        
        <div className="career-card">
          <img src={img1} alt="Growth" />
          <h3>Benefits and beyond</h3>
          <p>
            Around the globe, Deloitte member firms offer comprehensive
            rewards and benefits to support the whole you.
          </p>
          <div className="career-line"></div>
        </div>

       
        <div className="career-card">
          <img src={img2} alt="Opportunities" />
          <h3>Benefits and beyond</h3>
          <p>
            Around the globe, Deloitte member firms offer comprehensive
            rewards and benefits to support the whole you.
          </p>
          <div className="career-line"></div>
        </div>

       
        <div className="career-card">
          <img src={img3} alt="Culture" />
          <h3>Benefits and beyond</h3>
          <p>
            Around the globe, Deloitte member firms offer comprehensive
            rewards and benefits to support the whole you.
          </p>
          <div className="career-line"></div>
        </div>

      </div>

    </section>
  );
}

export default Careermid;