import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about_container">
        <h1 className="about_title">
          About <strong>Me</strong>
        </h1>
        <p className="about_text">
          I started my journey into the tech space in 2018. I just wanted to get
          more knowledge on how web applications work. Over the years, I have
          gotten more intrigued and have found myself in a position to learn
          more and even start a career in tech. I am hopeful for the journey
          ahead.
          <br />
          <br />I am skilled in various front-end technologies such as HTML, CSS, JavaScript, React, and I am ready to work!!!.
        </p>
        <div className="button_container">
          <div className="button1">
            <a
              href="https://www.linkedin.com/in/ezekieladetuwo/"
              className="hire_button"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </div>
          <div className="button2">
            <a
              href="https://resume.skillreactor.io/192061d03d76564319f680e97fa31c02"
              className="hire_button"
              target="_blank"
              rel="noreferrer"
            >
              Skillreactor Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
