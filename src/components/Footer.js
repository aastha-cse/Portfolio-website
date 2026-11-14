
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center footer-main">
          <Col xs={12} md={4} className="footer-brand">
            <a href="#home" aria-label="Back to home">
              <img src={logo} alt="Logo" />
            </a>
            <p>Building ideas into reality.</p>
          </Col>

          <Col xs={12} md={4} className="footer-social">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aastha-gupta-507380229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/aastha-cse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
          </Col>

          <Col xs={12} md={4} className="footer-contact">
            <span className="footer-label">GET IN TOUCH</span>
            <a href="mailto:guptaaastha824@gmail.com">
              guptaaastha824@gmail.com
            </a>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Aastha Gupta. All rights reserved.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
};
