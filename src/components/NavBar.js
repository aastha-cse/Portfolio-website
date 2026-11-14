import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => onUpdateActiveLink("home")}>
          <img className="navbar-logo" src={logo} alt="Aastha Gupta" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#career"
              className={
                activeLink === "career" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("career")}
            >
              Career
            </Nav.Link>
            
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <div className="navbar-extras">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aastha-gupta-507380229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="" />
              </a>

              <a
                href="https://github.com/aastha-cse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="" />
              </a>

            </div>

            <HashLink to="#connect" smooth className="navbar-connect">
              Let's Connect <span>↗</span>
            </HashLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
