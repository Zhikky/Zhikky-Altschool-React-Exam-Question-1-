import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import Navbar from "../Navbar.js/navbar";
import "./products.css";

function Users() {
  return (
    <ErrorBoundary>
      <section className="home-container">
        <Navbar />
        <div className="content">
          <div>
            <h1>Users</h1>
            <p>This is the Users page</p>
            <div className="products-container">
              <NavLink
                to="/users/search"
                className="products"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "black" }
                }
              >
                Search
              </NavLink>
              <NavLink
                to="/users/addusers"
                className="products"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "black" }
                }
              >
                Add Users
              </NavLink>
              <NavLink
                to="/users/viewusers"
                className="products"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "black" }
                }
              >
                View Users
              </NavLink>
            </div>
            <Outlet className="outlet" />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default Users;
