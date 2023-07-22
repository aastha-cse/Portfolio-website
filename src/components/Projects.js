import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Todo-List",
      description: "May, 2023",
      imgUrl: projImg1,
    },
    {
      title: "Mini Chat App",
      description: "December, 2022 - January, 2023",
      imgUrl: projImg2,
    },
    {
      title: "Spotify Clone",
      description: "June, 2022 - July, 2022",
      imgUrl: projImg3,
    },
    {
      title: "Digital Art",
      description: "November, 2021 - December, 2021",
      imgUrl: projImg4,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have had the opportunity to work on a variety of projects. I enjoy tackling challenges and finding innovative solutions that meet the unique needs of each project.<br></br> Each project represents my dedication to delivering high-quality results and pushing boundaries in Web Development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am dedicated to continuous growth and learning, staying up-to-date with the latest technologies and trends in order to provide innovative solutions. I thrive on challenges and enjoy finding creative approaches to solve complex problems.<br></br>Collaboration is at the heart of my work. I believe in building strong relationships with clients and colleagues, fostering an environment of open communication. By working closely together, we can achieve remarkable outcomes and bring ideas to life.<br></br>Thank you for taking the time to explore my portfolio. I hope it has provided you with insights into my capabilities and the value I can bring to your projects. I look forward to connecting and exploring how we can collaborate to achieve great things.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Thankyou for visiting!</p><br></br><p><a href="https://github.com/aastha-cse" class="text-white">Click to visit my Github Profile</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
