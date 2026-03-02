import "./Newshero.css";
import newsbg from "../../assets/images/newsbg.svg";

function Newshero() {
  return (
    <section className="news-hero">

      
      <img src={newsbg} alt="News Illustration" className="news-image" />

      
      <div className="news-overlay"></div>

      
      <div className="news-hero-content">
        <div className="news-line"></div>

        <div className="news-text">
          <h1>News & Events</h1>
          <p>Shape your future with confidence</p>
        </div>
      </div>

    </section>
  );
}

export default Newshero;