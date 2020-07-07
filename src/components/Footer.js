import React from "react";
import SocialLinks from "../constants/socialLinks";
import { GrGatsbyjs } from "react-icons/gr";
// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { Icon } from "@iconify/react";
import netlifyIcon from "@iconify/icons-simple-icons/netlify";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h5>
          &copy; {new Date().getFullYear()},<span> Aravind. </span> Built with{" "}
          <GrGatsbyjs /> and <FaReact /> deployed on <Icon icon={netlifyIcon} />
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
