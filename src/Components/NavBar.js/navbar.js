import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar-container">
      <div className="navbar-links">
        <a href="./">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </section>
  );
}

export default Navbar;
