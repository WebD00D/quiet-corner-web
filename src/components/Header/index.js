import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div className="navbar align-center">
    <div className="site-container">
      <div className="space-between align-center">
        <div>
          <Link to="/"><img style={{marginTop: "5px"}} src={require("../../images/pink_WORDMARK.svg")} /></Link>
        </div>
        <div>
          <Link to="/faqs" className="nav-link headline-text">FAQs</Link>
          <Link to="/#contact" className="nav-link headline-text">Get In Touch</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
