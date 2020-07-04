import React from "react";
import SocialLinks from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h6>
          copyright &copy; {new Date().getFullYear()}
          <span> Aravind </span> all rights reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
