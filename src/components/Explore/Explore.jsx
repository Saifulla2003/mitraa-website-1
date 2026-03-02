import "./Explore.css";
import treeBg from "../../assets/images/treebg.svg"; 

function Explore() {
  return (
    <section
      className="explore-section"
      style={{ backgroundImage: `url(${treeBg})` }}
    >
      <div className="explore-container">

        <div className="explore-content">

         
          <h2 className="explore-title">
            Engineering the Moral Foundation of <br />
            the Intelligent World
          </h2>

         
          <p className="explore-description">
            We are building ethical, explainable, and accountable frameworks to <br />
            guide physical AI as it moves into the real world placing <br />
            humanity, trust, and responsibility at the core of <br />
            intelligence.
          </p>

          <button className="explore-btn">Explore</button>

        </div>

        <p className="explore-quote">
          “Smart enough to lead, responsible enough to trust we built for growth, guided by values.”
        </p>

      </div>
    </section>
  );
}

export default Explore;