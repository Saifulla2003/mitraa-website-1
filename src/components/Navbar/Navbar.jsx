import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logologo from "../../assets/images/logologo.svg";
import mitra from "../../assets/images/mitraa.svg";
import globe from "../../assets/images/globe.svg";
import contact from "../../assets/images/contact.svg";
import search from "../../assets/images/search.svg";

import Signinmodel from "../Signinmodel/Signinmodel";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

       
          <div className="navbar-left">
            <img src={logologo} alt="Logo Icon" className="logo-icon" />
            <img src={mitra} alt="Mitraa Text" className="logo-text" />
          </div>

          
          <nav className="nav-links">
            <NavLink to="/" end>
              What We Do
            </NavLink>

            <NavLink to="/aboutus">
              Who We Are
            </NavLink>

            <NavLink to="/careers">
              Careers
            </NavLink>

            <NavLink to="/news">
              News & Events
            </NavLink>

            <NavLink to="/portfolio">
              Portfolio
            </NavLink>

            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </nav>

         
          <div className="nav-right">

            <div className="icon-circle">
              <img src={search} alt="search" />
            </div>

            <div className="icon-circle">
              <img src={globe} alt="globe" />
            </div>

            <div
              className="sign-btn"
              onClick={() => setShowModal(true)}
            >
              <img src={contact} alt="signin" />
              <span>Sign in</span>
            </div>

          </div>

        </div>
      </header>

      {showModal && (
        <Signinmodel onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Navbar;