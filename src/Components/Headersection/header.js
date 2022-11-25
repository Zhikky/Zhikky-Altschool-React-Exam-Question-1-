import React from "react";

function Header() {
  return (
    <div className="header-content">
      <div className="header-content2">
        <p className="header_text">Hello, I'm</p>
        <h1 className="header_title">Ezekiel Adetuwo</h1>
        <p className="header_text2">and this is my portfolio website</p>
      </div>
      <div className="logo_container">
          <img
            className="logo_image"
            src="https://s3.eu-west-2.amazonaws.com/documentation.skillreactor.io/personal_images/192061d03d76564319f680e97fa31c02/personal_image"
            alt="logo"
          />
      </div>
    </div>
  );
}

export default Header;
