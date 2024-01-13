import React from 'react';
import { Col } from 'react-bootstrap';
import { SlArrowRightCircle } from "react-icons/sl";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Images" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
           <br></br><SlArrowRightCircle className="github-link-img"/>
          </a>
        </div>
      </div>
    </Col>
  );
};
