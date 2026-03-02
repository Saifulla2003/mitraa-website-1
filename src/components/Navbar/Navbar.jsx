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
  const [menuOpen, setMenuOpen] = useState(false);   // 🔥 Mobile toggle state

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-left">
            <img src={logologo} alt="Logo Icon" className="logo-icon" />
            <img src={mitra} alt="Mitraa Text" className="logo-text" />
          </div>

          {/* Nav Links */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              What We Do
            </NavLink>
            <NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>
              Who We Are
            </NavLink>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </NavLink>
            <NavLink to="/news" onClick={() => setMenuOpen(false)}>
              News & Events
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </nav>

          {/* Right Section */}
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

          {/* 🔥 Hamburger Menu */}
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
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