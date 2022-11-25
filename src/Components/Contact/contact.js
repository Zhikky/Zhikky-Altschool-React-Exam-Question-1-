import React from "react";

function Contact(){
    return (
      <section className="getintouch" id="contact">
        <h1 className="contact">
          Contact <strong>Details</strong>
        </h1>
        <div className="details_container">
          <label>EMAIL</label>
          <p className="details">ezeadetuwo@gmail.com</p>
          <label>ADDRESS</label>
          <p className="details">
            15 Egbado Street, Dalemo, Alakuko Lagos, Nigeria.
          </p>
        </div>
      </section>
    );
}

export default Contact;