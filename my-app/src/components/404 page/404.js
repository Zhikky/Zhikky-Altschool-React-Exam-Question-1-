import React from "react";
import { useNavigate } from "react-router-dom";
import "./404.css";

function PageNotFound(){
  //useNavigate hook
  const navigate = useNavigate();

  //navigate to home page
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <section className="error">
      <h1>404 Page</h1>
      <p>PageNotFound</p>
      <button onClick={handleNavigate} className="return-home-button" >
       Return to Home page
      </button>
    </section>
  );
}

export default PageNotFound;