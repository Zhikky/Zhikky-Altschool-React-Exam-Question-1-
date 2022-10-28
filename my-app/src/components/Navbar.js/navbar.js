import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css";

function Navbar() {
    return (
      <section className="navbar-container">
        <NavLink className="navbar" to="/">
          Home
        </NavLink>
        <NavLink className="navbar" to="/login">
          Login
        </NavLink>
        <NavLink className="navbar" to="/users">
          Users
        </NavLink>
        <NavLink className="navbar" to="/about">
          About
        </NavLink>
      </section>
    );
}

export default Navbar;