import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div className="navbar align-center">
    <div className="site-container">
      <div className="space-between align-center">
        <div>
          <img style={{marginTop: "5px"}} src={require("../../images/pink_WORDMARK.svg")} />
        </div>
        <div>
          <Link to="/page-2" className="nav-link headline-text">FAQs</Link>
          <span className="nav-link headline-text">Get In Touch</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
