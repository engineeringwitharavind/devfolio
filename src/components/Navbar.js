import React from "react";
import logo from "../assets/aravind-logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button
            type="button"
            className="toggle-btn"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks
          aria-label="Navigation Links"
          styleClass="nav-links"
        ></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
