import "./Genaihero.css";
import genaiBg from "../../assets/images/genaiheroimg.svg"; 

function Genaihero() {
  return (
    <section
      className="genai-hero"
      style={{ backgroundImage: `url(${genaiBg})` }}
    >
      <div className="genai-overlay"></div>

      <div className="genai-content">
        <div className="genai-line"></div>

        <div className="genai-text">
          <h1>Generative AI Solutions</h1>
          <p>Turning data and ideas into intelligent outcomes</p>
        </div>
      </div>
    </section>
  );
}

export default Genaihero;