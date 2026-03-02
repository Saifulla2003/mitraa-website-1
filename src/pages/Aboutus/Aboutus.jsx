import ContactSection from "../../components/Contactsection/Contactsection";
import Footer from "../../components/Footer/Footer";
import Abouthero from "../../components/Aboutushero/Aboutushero";
import AboutusMid from "../../components/AboutusMid/AboutusMid";
import AboutusEnd from "../../components/Aboutend/AboutusEnd";

function Aboutushero() {
  return (
    <>
      <Abouthero /> 
      <AboutusMid />
      <AboutusEnd />
      <ContactSection />
      <Footer />

    </>
  );
}

export default Aboutushero;