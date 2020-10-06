import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button
        aria-label="Close Button"
        className="close-btn"
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <Links
          aria-label="Sidebar Links"
          styleClass={`${isOpen ? "sidebar-links" : ""}`}
        />
        <SocialLinks
          aria-label="Social Links"
          styleClass={`${isOpen ? "sidebar-icons" : ""}`}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
