import React from "react";
import { ErrorBoundary } from "./Products/ErrorBoundary/ErrorBoundary";
import Navigation from "./Navbar.js/nav";
import Navbar from "./Navbar.js/navbar";

function Home() {
  return (
    <ErrorBoundary>
      <section className="home-container">
        <Navbar />
        <h1>Home</h1>
        <p>Click on the link below to go to the About page</p>
        <Navigation />
      </section>
    </ErrorBoundary>
  );
}

export default Home;
