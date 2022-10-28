import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    //useNavigate hook
    const navigate = useNavigate();
    
    //navigate to home page
    const handleNavigate= (event)=>{
        event.preventDefault();
        navigate("/")
    }

  return (
    <section className="header">
      <div className="inner-header flex">
        <div className="envelope">
          <form action="">
            <p className="details">Login</p>
            <p className="details2">Enter your details below to sign in</p>
            <input
              type="text"
              className="text"
              placeholder="Username"
              required
            />
            <div className="phone-container">
              <input
                type="tel"
                className="text2"
                id="text2"
                placeholder="Phone Number"
                required
              />
            </div>
            <button onClick={handleNavigate} className="button">
              Login
            </button>
            <p className="forgot-password">Forgot your password?</p>
          </form>
        </div>
      </div>
      <div className="content flex" id="content_flex">
        Have a blissful experience
      </div>
    </section>
  );
}

export default Login;
