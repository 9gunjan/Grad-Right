import React from "react";
import "../Styles/Header.css";
const Header = () => {
  return (
    <div className="header-component-full">
      <div className="header-container">
        <div className="header-start-img-logo">
          <img className="logo"
            src="https://img.paperform.co/fetch/w_1200,f_auto/https://s3.amazonaws.com/pf-upload-01/u-41793/1/2020-02-08/2w034jg/Paperform%20img.jpg"
            alt="Logo"
          />
        </div>

        <div className="header-middle">
          <a>Selection</a>
          <a>Financing</a>
          <a>Tools</a>
        </div>

        <div className="header-right">
          <a>For Universities</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
