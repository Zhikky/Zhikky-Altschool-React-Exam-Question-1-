import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="facebook">
          <a
            href="https://www.facebook.com/adetuwo.ezekiel.7/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/zhikky_studios/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://twitter.com/EzekielAdetuwo"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/ezekieladetuwo/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
