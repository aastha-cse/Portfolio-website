
import { Container } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

export const Projects = () => {
  const projects = [
    {
      title: "Todo List",
      description: "A task management application for organizing and tracking daily activities.",
      date: "May 2023",
      image: projImg1,
      githubLink: "https://github.com/aastha-cse/Todo-list",
      number: "01",
    },
    {
      title: "Mini Chat App",
      description: "A real-time messaging application designed to enable seamless communication.",
      date: "Dec 2022 – Jan 2023",
      image: projImg2,
      githubLink: "https://github.com/aastha-cse/My-chat-app",
      number: "02",
    },
    {
      title: "Spotify Clone",
      description: "A music streaming interface inspired by Spotify, with an interactive user experience.",
      date: "Jun 2022 – Jul 2022",
      image: projImg3,
      githubLink: "https://github.com/aastha-cse/My-web-project",
      number: "03",
    },
    {
      title: "Digital Art",
      description: "A Python-based project exploring digital creativity and image manipulation.",
      date: "Nov 2021 – Dec 2021",
      image: projImg4,
      githubLink: "https://github.com/aastha-cse/My-python-project",
      number: "04",
    },
    {
      title: "Quiz App",
      description: "A quiz application built with REST APIs and MongoDB for managing quiz data.",
      date: "Aug 2023 – Nov 2023",
      image: projImg5,
      githubLink: "https://github.com/aastha-cse/Quiz-App-REST-API-TS-Mongoose",
      number: "05",
    },
    {
      title: "Vehicle Detection & Counting",
      description: "An image processing project focused on detecting and counting vehicles.",
      date: "Mar 2023 – Jun 2023",
      image: projImg6,
      githubLink: "https://github.com/aastha-cse/Image-processing-project/tree/master",
      number: "06",
    },
  ];

  return (
    <section className="projects-section" id="project">
      <Container>
        <div className="projects-heading">
          <span className="section-eyebrow">SELECTED WORK</span>

          <h2>
            Projects <span>&</span> Work
          </h2>

          <p>
            A collection of projects where I explore ideas, solve problems,
            and build applications using different technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image"
                  loading="lazy"
                />

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>PROJECT</span>
                  <span>{project.date}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span>View on GitHub</span>
                  <span className="project-link-arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
