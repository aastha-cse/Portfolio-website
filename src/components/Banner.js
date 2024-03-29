import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/head.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "MERN Stack Developer", "Web Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  });  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  

  const handleConnectClick = () => {
    const contactSection = document.getElementById('connect');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hello World! I'm Aastha Gupta`}</h1> <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "MERN Stack Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p>I'm thrilled to have you here. My name is Aastha Gupta, and I'm a student at Graphic Era University. This portfolio showcases my skills and projects in Web Development.</p><br></br>
                  <p>Feel free to browse through my projects and learn more about my skills and expertise. If you have any questions or would like to discuss a potential collaboration, please don't hesitate to get in touch. I'm excited to connect with you and explore how we can work together to bring your ideas to life.</p><br></br>
                  <p>Thank you for visiting, and I hope you enjoy your time exploring my portfolio!</p>
                  <button onClick={handleConnectClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
