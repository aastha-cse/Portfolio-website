import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const toRotate = ["Application Engineer 2 at Flipkart", "Backend Developer"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(120);

  const period = 1800;

  // Typewriter effect
  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(120);
      } else if (isDeleting) {
        setDelta(55);
      } else {
        setDelta(120);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta]);

  // Scroll to contact section
  const handleConnectClick = () => {
    const contactSection = document.getElementById("connect");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "banner-content animate__animated animate__fadeInUp"
                      : "banner-content"
                  }
                >
                  <h1>
                    Hi, I'm <span>Aastha Gupta.</span>
                  </h1>

                  <h2 className="banner-role">
                    {text}
                    <span className="typing-cursor">|</span>
                  </h2>

                  <p className="banner-description">
                    I build reliable and scalable software experiences, with a
                    focus on backend engineering and solving real-world
                    problems. Currently working at Flipkart, I'm passionate
                    about writing clean code, learning new technologies and
                    building products that make a difference.
                  </p>

                  <div className="banner-tags">
                    <span>Backend Development</span>
                    <span>Software Engineering</span>
                    <span>Problem Solving</span>
                  </div>

                  <div className="banner-actions">
                    <button
                      className="connect-btn"
                      onClick={handleConnectClick}
                    >
                      Let's Connect
                      <ArrowRightCircle size={21} />
                    </button>

                    <a href="#career" className="work-link">
                      Explore my work <span>↗</span>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "banner-image-container animate__animated animate__fadeIn"
                      : "banner-image-container"
                  }
                >
                  <div className="image-glow"></div>

                  <div className="banner-image-frame">
                    <img
                      src={headerImg}
                      alt="Aastha Gupta"
                      className="banner-profile-image"
                    />
                  </div>

                  <div className="image-caption">
                    <span className="caption-indicator"></span>
                    <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
