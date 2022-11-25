import React from "react";
import Navbar from "./NavBar.js/navbar";
import Header from "./Headersection/header";
import Projects from "./Projects/displayprojects";
import About from "./About/about";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

function Home() {
  return (
    <div className="App">
      <div className="home-container">
        <section className="header">
          <Navbar />
          <Header />
        </section>
        <section className="projects">
          <h1 className="projects_title">Github Projects</h1>
          <Projects />
        </section>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
