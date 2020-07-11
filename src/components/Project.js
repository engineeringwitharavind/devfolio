import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithub, FaLink } from "react-icons/fa";

const Project = ({ description, title, github, stack, url, image }) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github} rel="noopener noreferrer" target="_blank">
            <FaGithub className="project-icon" />
          </a>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <FaLink className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

// For Projects Number => <span className="project-number">0{index + 1}.</span>

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
