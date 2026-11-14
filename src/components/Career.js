
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Career = () => {
  const experiences = [
    {
      company: "Flipkart",
      role: "Application Engineer - II",
      duration: "March 2026 - Present",
      location: "Bengaluru, India",
      current: true,
      description: [
        "Working in the Customer Experience (Cx) team, responsible for critical post-order customer journeys.",
        "Contributing to customer-facing flows including My Orders, Order Details, Order Confirmation and Returns.",
      ],
    },
    {
      company: "Flipkart",
      role: "Application Engineer - I",
      duration: "July 2024 - March 2026",
      location: "Bengaluru, India",
      current: false,
      description: [
        "Owned end-to-end production on-call responsibilities, independently handling debugging, fixes and deployments.",
        "Managed weekly production deployments, performing sanity checks and testing while maintaining a zero-rollback track record.",
        "Implemented authentication across services and critical APIs handling personally identifiable information.",
        "Resolved a critical post-order price mismatch issue through rapid solutioning and code changes.",
        "Served as the development point of contact for onboarding integrations with the centralized resolution engine.",
        "Optimized API integration by consolidating two API calls into one.",
      ],
    },
    {
      company: "Tri-Web Genesis Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      duration: "August 2023 - November 2023",
      location: "Bengaluru, India",
      current: false,
      description: [
        "Worked on full-stack web development using MongoDB, Express.js, React.js and Node.js.",
      ],
    },
  ];

  return (
    <section className="career" id="career">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "career-content animate__animated animate__fadeInUp"
                      : "career-content"
                  }
                >
                  {/* Section heading */}
                  <div className="career-heading">
                    <span className="career-eyebrow">
                      MY PROFESSIONAL JOURNEY
                    </span>

                    <h2>
                      Career <span>& Experience</span>
                    </h2>

                    <p>
                      A journey of continuous learning, engineering
                      challenges and professional growth.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="career-timeline">
                    {experiences.map((experience, index) => (
                      <div className="career-item" key={index}>
                        
                        {/* Timeline */}
                        <div className="timeline-indicator">
                          <span
                            className={
                              experience.current
                                ? "career-marker active-marker"
                                : "career-marker"
                            }
                          ></span>
                        </div>

                        {/* Experience content */}
                        <div className="career-card">
                          <div className="career-card-header">
                            <div className="career-title-group">
                              <div className="career-company">
                                {experience.company}
                                {experience.current && (
                                  <span className="current-badge">
                                    CURRENT
                                  </span>
                                )}
                              </div>

                              <h3>{experience.role}</h3>
                            </div>

                            <div className="career-duration">
                              {experience.duration}
                            </div>
                          </div>

                          <div className="career-location">
                            <span className="location-dot"></span>
                            {experience.location}
                          </div>

                          <ul className="career-description">
                            {experience.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};
