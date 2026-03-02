import "./Genaimid.css";

import gptImg from "../../assets/images/laptopimg.svg";
import huggingImg from "../../assets/images/facelapimg.svg";

function Genaimid() {
  return (
    <section className="genai-mid">
      <div className="genai-container">

        {/* Header */}
        <div className="genai-header">
          <h2>What We Deliver at MiTRA Technology</h2>
          <p>
            We build AI systems that understand, assist, and adapt. From intelligent assistants to custom
            workflows, generative AI cuts manual work and sharpens decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="genai-grid">

          {/* Row 1 - Left (Large Image Card) */}
          <div className="genai-card image-card card-gpt">
            <img src={gptImg} alt="GPT" />
            <div className="card-overlay">
              <h3>OpenAI GPT-4o + LangChain</h3>
              <p>
                Use AI, machine learning, and automation to streamline processes,
                reduce manual work, and improve business efficiency.
              </p>
            </div>
          </div>

          {/* Row 1 - Right */}
          <div className="genai-card purple-card card-claude">
            <h3>Anthropic Claude 3.5</h3>
            <p>
              Protect systems, networks, and data from cyber threats
              through intelligent AI monitoring and automation.
            </p>
          </div>

          {/* Row 2 - Left */}

             <div className="genai-card image-card card-hugging"></div>
            
            <h3>Pinecone</h3>
            <p>
              Protect systems, networks, and data from cyber threats
              through intelligent AI monitoring and automation.
            </p>
          </div>

          {/* Row 2 - Right */}
           <div className="genai-card purple-card card-pinecone">
            <img src={huggingImg} alt="HuggingFace" />
            <div className="card-overlay">
              <h3>Hugging Face Transformers</h3>
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

export default Genaimid;