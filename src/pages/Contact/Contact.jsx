import ContactSection from "../../components/Contactsection/Contactsection";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
function Contact() {
  return (
    <>
      <section className="contact-hero">
         
        <div className="contact-hero-overlay">
          <div className="contact-line"></div>
          <h1>Contact Us</h1>
          <p>Shape your future with confidence</p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;