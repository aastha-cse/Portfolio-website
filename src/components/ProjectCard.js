import React from 'react';
import { Col } from 'react-bootstrap';
import { SlArrowRightCircle } from "react-icons/sl";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const rotateOnHover = () => {
    const arrowIcon = document.getElementById(`arrow-${title}`);
    if (arrowIcon) {
      arrowIcon.classList.add('rotate-on-hover');
    }
  };

  const resetRotation = () => {
    const arrowIcon = document.getElementById(`arrow-${title}`);
    if (arrowIcon) {
      arrowIcon.classList.remove('rotate-on-hover');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onMouseEnter={rotateOnHover} onMouseLeave={resetRotation}>
        <img src={imgUrl} alt="Project Images" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
           <br></br><SlArrowRightCircle id={`arrow-${title}`} className="github-link-img"/>
          </a>
        </div>
      </div>
    </Col>
  );
};
