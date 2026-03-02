import { useState } from "react";
import "./Newsmid.css";
import comingSoon from "../../assets/images/comingsoon.svg"; 

function NewsMid() {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <section className="news-mid">

      
      <div className="news-toggle">
        <button
          className={activeTab === "events" ? "active" : ""}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>

        <button
          className={activeTab === "news" ? "active" : ""}
          onClick={() => setActiveTab("news")}
        >
          News
        </button>
      </div>

      
      <div className="news-coming">
        <img src={comingSoon} alt="Coming Soon" />
      </div>

    </section>
  );
}

export default NewsMid;