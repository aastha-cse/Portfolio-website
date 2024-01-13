import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/aastha-gupta-507380229/"target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/aastha-cse"target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt=""/></a>
                <a href="https://drive.google.com/file/d/1qGtoQDsB1DMjikrdcAuQQYovXn9UKcXX/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Email : guptaaastha824@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
