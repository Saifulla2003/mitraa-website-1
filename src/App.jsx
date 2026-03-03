import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Aboutus from "./pages/Aboutus/Aboutus";
import Careers from "./pages/Careers/Careers";
import News from "./pages/News/News";
import Genai from "./pages/Genai/Genai";
import Web from "./pages/Web/Web";
import Service from "./components/Service/Service";
import Execution from "./components/Execution/Execution";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/discover" element={<Home />} />
        <Route path="/genai" element={<Genai />} />
        <Route path="/web" element={<Web />} />
        <Route path="/service" element={<Service />} />
        <Route path="/execution" element={<Execution />} />
      </Routes>
    </>
  );
}

export default App;