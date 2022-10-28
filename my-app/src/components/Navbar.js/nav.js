import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

//Navigation link Component
function Navigation(){
  return (
    <section className="nav">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="navigation"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="navigation"
        to="/about"
      >
        About Page
      </NavLink>
    </section>
  );
}

export default Navigation;